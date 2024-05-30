import requests
import smartsheet
import logging
import os

SMART_ACCESS_TOKEN = os.environ['SMART_ACCESS_TOKEN']
GITHUB_ACCESS_TOKEN = os.environ['GH_ACCESS_TOKEN']
ISSUE_NUM = os.environ['ISSUE_NUM'] 

# Initialize client. Uses the API token in the environment variable 'SMARTSHEET_ACCESS_TOKEN'
smart = smartsheet.Smartsheet(SMART_ACCESS_TOKEN)
# Make sure we don't miss any error
smart.errors_as_exceptions(True)

# Log all calls
logging.basicConfig(filename='rwsheet.log', level=logging.INFO)

# GET request to GitHub API
response = requests.get(
    f'https://api.github.com/repos/PelletierConstructionGroup/PelletierConstructionGroup.github.io/issues/{ISSUE_NUM}',
                        headers={'Authorization': GITHUB_ACCESS_TOKEN, 
                                 'Content-Type': 'application/vnd.github+json',
                                 'X-GitHub-Api-Version': '2022-11-28'})
issues = response.json()

assignee = 'assignee'
try: 
    if issues['assignee'] is not None:
        assignee = issues['assignee']['login']
    else:
        assignee = 'Missing assignee'
except TypeError:
    assignee = 'Missing assignee'
title = issues['title']
repo_url = issues['repository_url']
index = issues['number']

# POST request to Smartsheet API
smartsheet_response = requests.post(
    'https://api.smartsheet.com/2.0/sheets/3464468369461124/rows',
    headers={'Authorization': f'Bearer {SMART_ACCESS_TOKEN}', 'Content-Type': 'application/json'},
    json={
        'sheetId': 3464468369461124,
        'accessLevel': 'OWNER',
        'createdBy': {
            'name': 'automation'
        },
        'cells': [
            {
            'columnId': 266306059456388,
            'displayValue': 'title',
            'value': title
            },
            {
            'columnId': 4769905686826884,
            'displayValue': 'repo url',
            'value': repo_url[56:]
            },
            {
            'columnId': 7021705500512132,
            'displayValue': 'assignee',
            'value': assignee
            },
            {
            'columnId': 1392205966299012,
            'displayValue': 'index',
            'value': index
            }
        ]
        })
