"""
Use MachineBox.io to process Entities
"""

import pandas
import requests
import numpy as np

#filename = 'groups_102523307031776_23-05-2018-15-02-44.tsv'

#TODO: Textbox config in config file 
textbox_config = "http://localhost:8080/textbox/check"

def process_entities(filename):
    df = pandas.read_csv(filename, sep='\t')
    df['Timestamp String'] = df['Timestamp']
    df['Timestamp'] = pandas.to_datetime(df['Timestamp'])
    df['User Content'] = df['User Content'].replace(np.nan, '')
    df['Link Content'] = df['Link Content'].replace(np.nan, '')

    for index, row in df.iterrows():
        content = str(row['User Content']) + " " + str(row['Link Content'])
        r = requests.post(textbox_config, data={'text':content})
        keywords_json = r.json()['keywords']
        keyword_array = [x['keyword'].decode('utf-8').encode('ascii', errors='ignore') for x in keywords_json]
        keyword_string = ",".join(map(str, keyword_array))
        df.loc[index, 'keywords'] = keyword_string

    df.to_csv(filename, sep='\t', index=False)
