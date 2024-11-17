import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

import requests

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"]
url = "http://localhost:8080/images"


def parse():
    """Shows basic usage of the Drive v3 API.
    Prints the names and ids of the first 10 files the user has access to.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open("token.json", "w") as token:
            token.write(creds.to_json())

    try:
        # CHANGE THE FOLDER_ID HERE TO UPLOAD PICTURES SIMULTANEOUSLY
        folder_id = "1-eCZ2A2V7Ea9zqP1FBOvRMsMmmOASS4e"
        service = build("drive", "v3", credentials=creds)

        # Call the Drive v3 API
        results = (
            service.files()
            .list(q=f"'{folder_id}' in parents", fields="nextPageToken, files(id, name, mimeType)")
            .execute()
        )
        items = results.get("files", [])
        print(items)

        if not items:
            print("No files found.")
            return
        print("Files:")
        for item in items:
            print(f"{item['name']} ({item['id']}) ({item['mimeType']})")
    except HttpError as error:
        # TODO(developer) - Handle errors from drive API.
        print(f"An error occurred: {error}")

    return items

def post_request(url, items):
    requests.post(url, json=items, timeout=5)

if __name__ == "__main__":
    items = parse()
    post_request(url, items)
    # recursive_parsing("root", asf,)



def recursive_parsing(folder_name, items, res):
    # {
    #     "event1": [
    #         {
    #             folder_name: "ablas",
    #             id: "ablas_id",
    #             mimeType: "abcasd"
    #         },
    #         {
    #             folder_name: "ablas",
    #             id: "ablas_id",
    #             mimeType: "abcasd"
    #         }
    #     ]
    # }
    img_dict = {}
    loi = []
    for item in items:
        if 'image/' in item['mimeType']:
            img = {
                "folder_name": folder_name,
                'id':item['id'],
                'mimeType':item['mimeType']
            }
            loi.append(img)
        elif 'application/vnd.google-apps.folder' in item['mimeType']:
            recursive_parsing(item['name'], parse(items))
    res[folder_name] = loi
    return img_dict
                
            # base case name: image/
            # else, while begins with name: application/ ... folder
            # opens the folder and saves the current id folder as a key and the folders inside as an array of values
