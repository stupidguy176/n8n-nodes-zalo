import {
    ICredentialType,
    INodeProperties,
  } from 'n8n-workflow';
  
  export class N8nApi implements ICredentialType {
    name = 'n8nApi';
    displayName = 'N8n Account Credential API';
    // eslint-disable-next-line n8n-nodes-base/cred-class-field-documentation-url-not-http-url
    documentationUrl = 'n8n-n8n-api';
    iconUrl = 'file:./shared/n8n.png';

    properties: INodeProperties[] = [
      {
        displayName: 'API Key',
        name: 'apiKey',  
        type: 'string',
								typeOptions: { password: true },
        default: '',
        description: 'The API key used to authenticate with the n8n API.',
        required:  true,
      },
      {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        default: 'http://127.0.0.1:5678',
        description: 'The URL of the n8n instance',
        required:  true,
      }
    ];
  }