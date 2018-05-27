"""
Test script to process entities
"""

import pandas
import numpy as np

filename = 'groups_102523307031776_23-05-2018-15-02-44.tsv'

df = pandas.read_csv(filename, sep='\t')
df['Timestamp String'] = df['Timestamp']
df['Timestamp'] = pandas.to_datetime(df['Timestamp'])
df['User Content'] = df['User Content'].replace(np.nan, '')
df['Link Content'] = df['Link Content'].replace(np.nan, '')
df['keywords'] = df['keywords'].replace(np.nan, '')

### Global
keyword_dict = {}
keyword_list = list(df['keywords'].values)
for keyword_group in keyword_list:
    keyword_group_array = keyword_group.split(',')
    for keyword in keyword_group_array:
        if keyword in keyword_dict:
            keyword_dict[keyword] = keyword_dict[keyword] + 1
        else:
            keyword_dict[keyword] = 1

keyword_sorted = sorted(keyword_dict.items(), key=lambda x: x[1], reverse=True)

# Get top n
n = 5
for i in xrange(0, n):
    keyword = keyword_sorted[i][0]
    count = keyword_sorted[i][1]

    df_keyword = df[df['keywords'].str.contains(keyword)]
    unique_people = df_keyword['Profile Name'].value_counts()
    unique_people_string = ""
    for idx in unique_people.index:
        unique_people_string += idx + " (" + str(unique_people[idx]) + " posts), "


### People Centric 

# Get people's entities
df_profile_groups = df.groupby('Profile Name')['keywords'].agg(lambda keywords: ''.join(keywords))
for idx in df_profile_groups.index:
    profile_name = idx
    profile_keywords = df_profile_groups[idx]

    profile_keywords_dict = {}
    profile_keywords_array = profile_keywords.split(',')

    for keyword in profile_keywords_array:
        if keyword in profile_keywords_dict:
            profile_keywords_dict[keyword] = profile_keywords_dict[keyword] + 1
        else:
            profile_keywords_dict[keyword] = 1

    profile_keywords_sorted = sorted(profile_keywords_dict.items(), key=lambda x: x[1], reverse=True)
