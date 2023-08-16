{
  "newVNet": {
    "addressSpace": {
      "addressPrefixes": [
        "172.0.0.0/16"
      ]
    },
    "bgpCommunities": null,
    "ddosProtectionPlan": null,
    "dhcpOptions": {
      "dnsServers": []
    },
    "enableDdosProtection": false,
    "enableVmProtection": null,
    "etag": "W/\"42ab7b2c-5eb7-4015-bfc8-75f0c35486dc\"",
    "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Network/virtualNetworks/KubeVNet",
    "location": "eastus",
    "name": "KubeVNet",
    "provisioningState": "Succeeded",
    "resourceGroup": "MyClusterDemoGroup",
    "resourceGuid": "32ce1b75-2446-4174-b466-12a66840860f",
    "subnets": [
      {
        "addressPrefix": "172.0.0.0/24",
        "addressPrefixes": null,
        "delegations": [],
        "etag": "W/\"42ab7b2c-5eb7-4015-bfc8-75f0c35486dc\"",
        "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Network/virtualNetworks/KubeVNet/subnets/MySubnet",
        "ipConfigurationProfiles": null,
        "ipConfigurations": null,
        "name": "MySubnet",
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