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
    "etag": "W/\"fdc04c88-5d5f-41df-9562-0bf3cbc8ee2d\"",
    "id": "/subscriptions/d65a3138-5e37-4af7-9663-8a8aeec6634a/resourceGroups/MyClusterDemoGroup/providers/Microsoft.Network/virtualNetworks/KubeVNet",
    "location": "eastus",
    "name": "KubeVNet",
    "provisioningState": "Succeeded",
    "resourceGroup": "MyClusterDemoGroup",
    "resourceGuid": "be8d1dd1-bae0-4680-aa0d-ac0660df26b3",
    "subnets": [
      {
        "addressPrefix": "172.0.0.0/24",
        "addressPrefixes": null,
        "delegations": [],
        "etag": "W/\"fdc04c88-5d5f-41df-9562-0bf3cbc8ee2d\"",
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