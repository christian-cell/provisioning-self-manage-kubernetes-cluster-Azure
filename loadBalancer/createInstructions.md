az network public-ip create \
    --resource-group MyClusterDemoGroup  \
    --name myBastionIP \
    --sku Standard 

az network vnet subnet create \
    --resource-group MyClusterDemoGroup  \
    --name AzureBastionSubnet \
    --vnet-name myVNet \
    --address-prefixes 10.1.1.0/27

az network bastion create \
    --resource-group MyClusterDemoGroup  \
    --name myBastionHost \
    --public-ip-address myBastionIP \
    --vnet-name myVNet \
    --location eastus