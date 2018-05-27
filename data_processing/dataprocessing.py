'''
Data Processing pipeline 
'''
import pandas
import json
import numpy as np

#filename = 'groups_102523307031776_23-05-2018-15-02-44.tsv'

def process_parsed_data(filename):
    #outfilename = 'processed/' + filename.split('/')[1].replace('.tsv', '.json')
    jsonFilename = filename.replace('.tsv', '.json')
    outfilename = 'processed/' + jsonFilename

    processed_data = {}

    df = pandas.read_csv(filename, sep='\t')
    df['Timestamp String'] = df['Timestamp']
    df['Timestamp'] = pandas.to_datetime(df['Timestamp'])
    df['User Content'] = df['User Content'].replace(np.nan, '')
    df['Link Content'] = df['Link Content'].replace(np.nan, '')
    df['keywords'] = df['keywords'].replace(np.nan, '')

    # Get file details
    time_data_generated = filename.replace('.tsv', '').split('_')[-1]
    earliest_post = df.Timestamp.min().strftime('%Y-%m-%d %H:%M')
    latest_post = df.Timestamp.max().strftime('%Y-%m-%d %H:%M')

    data_details = {}
    data_details['time_data_generated'] = time_data_generated
    data_details['earliest_post'] = earliest_post
    data_details['latest_post'] = latest_post
    data_details['filename'] = filename

    processed_data['data_details'] = data_details

    # Process entities
    keyword_dict = {}
    keyword_list = list(df['keywords'].values)
    for keyword_group in keyword_list:
        keyword_group_array = keyword_group.split(',')
        for keyword in keyword_group_array:
            if keyword in keyword_dict:
                keyword_dict[keyword] = keyword_dict[keyword] + 1
            else:
                keyword_dict[keyword] = 1

    keyword_sorted = sorted(keyword_dict, key=keyword_dict.get, reverse=True)

    # Find unique people who posted
    unique_people = []
    df_profile_counts = df['Profile Name'].value_counts()

    df_profile = df.groupby(['Profile Name']).Timestamp.apply(lambda x: [min(x), max(x)])

    for idx in df_profile_counts.index:
        person = {}
        person['name'] = idx
        person['count'] = int(df_profile_counts[idx])
        person['first_post'] = str(df_profile[idx][0])
        
        # Last post information
        person['last_post'] = str(df_profile[idx][1])
        last_post_row = df.loc[(df['Profile Name'] == idx) & (df['Timestamp'] == person['last_post'])]
        person['last_post_link'] = last_post_row['Link Posted'].values[0]
        person['last_post_content'] = last_post_row['Link Content'].values[0]

        unique_people.append(person)

    unique_people_sorted = sorted(unique_people, key=lambda k: k['count'], reverse=True)
    processed_data['unique_people'] = unique_people_sorted

    # Find most seen by 
    seen_by = []
    df_seenby_counts = df[['Profile Name', 'Seen By']].groupby(['Profile Name']).agg(['mean', 'sum']).reset_index()
    df_seenby_max = df.groupby('Profile Name', as_index=False).apply(lambda x: x.nlargest(1, columns=['Seen By'])).reset_index(level=1,drop=1)

    for idx in df_seenby_max.index:
        row = df_seenby_max.iloc[[idx]]

        person = {}
        person['name'] = row['Profile Name'].values[0]
        person['seen_by_max'] = row['Seen By'].values[0]
        person['content'] = row['User Content'].values[0] + " " + row['Link Content'].values[0]
        person['link'] = row['Link Posted'].values[0]
        person['seen_by_link'] = row['Seen by Link'].values[0]
        person['post_time'] = row['Timestamp String'].values[0]

        person_global_seenby = df_seenby_counts[df_seenby_counts['Profile Name']== person['name']]['Seen By']
        person['mean'] = int(person_global_seenby['mean'])
        person['sum'] = int(person_global_seenby['sum'])

        seen_by.append(person)

    seen_by_sorted = sorted(seen_by, key=lambda k: k['mean'], reverse=True)
    processed_data['seen_by'] = seen_by_sorted

    # Find most liked persons
    likes = []
    df_likes_counts = df[['Profile Name', 'Likes Count']].groupby(['Profile Name']).agg(['mean', 'sum']).reset_index()
    df_likes_max = df.groupby('Profile Name', as_index=False).apply(lambda x: x.nlargest(1, columns=['Likes Count'])).reset_index(level=1,drop=1)

    for idx in df_likes_max.index:
        row = df_likes_max.iloc[[idx]]

        person = {}
        person['name'] = row['Profile Name'].values[0]
        person['likes_max'] = row['Likes Count'].values[0]
        person['content'] = row['User Content'].values[0] + " " + row['Link Content'].values[0]
        person['link'] = row['Link Posted'].values[0]
        person['post_time'] = row['Timestamp String'].values[0]

        person_global_likes = df_likes_counts[df_likes_counts['Profile Name']==person['name']]['Likes Count']
        person['mean'] = int(person_global_likes['mean'])
        person['sum'] = int(person_global_likes['sum'])

        likes.append(person)

    likes_sorted = sorted(likes, key=lambda k: k['mean'], reverse=True)
    processed_data['likes'] = likes_sorted

    # Posts Per month
    months = []
    df_counts = df.groupby(df['Timestamp'].dt.month).count()
    for idx in df_counts.index:
        month_object = {}
        month_object['month'] = idx
        month_object['posts_per_month'] = int(df_counts['Profile Name'][idx])
        months.append(month_object)

    months_sorted = sorted(months, key=lambda k: k['posts_per_month'], reverse=True)
    processed_data['posts_by_month'] = months_sorted

    # Readship
    readership = []
    df_aggregate = df.groupby(df['Timestamp'].dt.month).agg(['sum', 'mean', 'max'])
    for idx in df_aggregate['Seen By']['mean'].index:
        month_object = {}
        month_object['month'] = idx
        month_object['readership'] = int(df_aggregate['Seen By']['mean'][idx])
        readership.append(month_object)

    readership_sorted = sorted(readership, key=lambda k: k['readership'], reverse=True)
    processed_data['readership'] = readership_sorted

    with open(outfilename, 'w') as outfile:
        data = json.dumps(processed_data)
        outfile.write(data)

    df.to_csv(filename, sep='\t')

    print "Data processed. Output written to: " + outfilename