{
  "accessTier": "Hot",
  "azureFilesIdentityBasedAuthentication": null,
  "creationTime": "2023-08-12T21:39:12.841548+00:00",
  "customDomain": null,
  "enableHttpsTrafficOnly": true,
  "encryption": {
    "keySource": "Microsoft.Storage",
    "keyVaultProperties": null,
    "services": {
      "blob": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2023-08-12T21:39:13.029045+00:00"
      },
      "file": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2023-08-12T21:39:13.029045+00:00"
      },
      "queue": null,
      "table": null
    }
  },
  "failoverInProgress": null,
  "geoReplicationStats": null,
  "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Storage/storageAccounts/christianazurefilessa",
  "identity": null,
  "isHnsEnabled": null,
  "kind": "StorageV2",
  "largeFileSharesState": null,
  "lastGeoFailoverTime": null,
  "location": "eastus",
  "name": "christianazurefilessa",
  "networkRuleSet": {
    "bypass": "AzureServices",
    "defaultAction": "Allow",
    "ipRules": [],
    "virtualNetworkRules": []
  },
  "primaryEndpoints": {
    "blob": "https://christianazurefilessa.blob.core.windows.net/",
    "dfs": "https://christianazurefilessa.dfs.core.windows.net/",
    "file": "https://christianazurefilessa.file.core.windows.net/",
    "internetEndpoints": null,
    "microsoftEndpoints": null,
    "queue": "https://christianazurefilessa.queue.core.windows.net/",
    "table": "https://christianazurefilessa.table.core.windows.net/",
    "web": "https://christianazurefilessa.z13.web.core.windows.net/"
  },
  "primaryLocation": "eastus",
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "resourceGroup": "MyClusterDemoGroup",
  "routingPreference": null,
  "secondaryEndpoints": null,
  "secondaryLocation": null,
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "statusOfPrimary": "available",
  "statusOfSecondary": null,
  "tags": {},
  "type": "Microsoft.Storage/storageAccounts"
}