{
  "newVNet": {
    "addressSpace": {
      "addressPrefixes": [
        "10.1.0.0/16"
      ]
    },
    "bgpCommunities": null,
    "ddosProtectionPlan": null,
    "dhcpOptions": {
      "dnsServers": []
    },
    "enableDdosProtection": false,
    "enableVmProtection": null,
    "etag": "W/\"25198d6a-5e70-4b30-82f3-99e8f689c679\"",
    "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Network/virtualNetworks/myVNet",
    "location": "eastus",
    "name": "myVNet",
    "provisioningState": "Succeeded",
    "resourceGroup": "MyClusterDemoGroup",
    "resourceGuid": "369c43d4-8516-4c57-9d8d-94d7a1e9bee7",
    "subnets": [
      {
        "addressPrefix": "10.1.0.0/24",
        "addressPrefixes": null,
        "delegations": [],
        "etag": "W/\"25198d6a-5e70-4b30-82f3-99e8f689c679\"",
        "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Network/virtualNetworks/myVNet/subnets/myBackendSubnet",
        "ipConfigurationProfiles": null,
        "ipConfigurations": null,
        "name": "myBackendSubnet",
        "natGateway": null,
        "networkSecurityGroup": null,
        "privateEndpointNetworkPolicies": "Disabled",
        "privateEndpoints": null,
        "privateLinkServiceNetworkPolicies": "Enabled",
        "provisioningState": "Succeeded",
        "purpose": null,
        "resourceGroup": "MyClusterDemoGroup",
        "resourceNavigationLinks": null,
        "routeTable": null,
        "serviceAssociationLinks": null,
        "serviceEndpointPolicies": null,
        "serviceEndpoints": null,
        "type": "Microsoft.Network/virtualNetworks/subnets"
      }
    ],
    "tags": {},
    "type": "Microsoft.Network/virtualNetworks",
    "virtualNetworkPeerings": []
  }
}
