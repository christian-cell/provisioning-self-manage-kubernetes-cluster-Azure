Create resource group
$ az group create -n MyClusterDemoGroup -l eastus

Create vnet
$ az network vnet create -g MyClusterDemoGroup -n KubeVNet --address-prefix 172.0.0.0/16 \
  --subnet-name MySubnet --subnet-prefix 172.0.0.0/24

Create masterNode
$ az vm create -n kube-master -g MyClusterDemoGroup --image ubuntults \
  --size Standard_DS2_v2 \
  --data-disk-sizes-gb 10 --generate-ssh-keys \
  --public-ip-address-dns-name kubeadm-christian-master

Create worker-node1
$ az vm create -n kube-worker-1 \
  -g MyClusterDemoGroup --image ubuntults \
  --size Standard_DS2_v2 --data-disk-sizes-gb 10 \
  --generate-ssh-keys \
  --public-ip-address-dns-name kubeadm-christian-worker-1

Create worker-node2
$ az vm create -n kube-worker-2 \
  -g MyClusterDemoGroup --image ubuntults \
  --size Standard_DS2_v2 --data-disk-sizes-gb 10 \
  --generate-ssh-keys \
  --public-ip-address-dns-name kubeadm-christian-worker-2

Conectamos con las 3 máquinas

master : $ ssh -i ~/.ssh/id_rsa christian@kubeadm-christian-master.eastus.cloudapp.azure.com
worker1: $ ssh -i ~/.ssh/id_rsa christian@kubeadm-christian-worker-1.eastus.cloudapp.azure.com
worker2: $ ssh -i ~/.ssh/id_rsa christian@kubeadm-christian-worker-2.eastus.cloudapp.azure.com

Corremos en los tres nodos
$ sudo swapoff -a
$ sudo sed -i '/ swap / s/^/#/' /etc/fstab

sudo apt update
# Install Docker
sudo apt install docker.io -y
sudo systemctl enable docker
# Get the gpg keys for Kubeadm
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add
sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"
# Install Kubeadm
sudo apt install kubeadm -y

ONLY MASTERNODES
$ sudo kubeadm init

kubeadm join 172.0.0.4:6443 --token 7h67jf.lzhy64mkvncsel7l \
	--discovery-token-ca-cert-hash sha256:c1c97446fb4c515f49e2e8cfd5ef375a9bc680c8232e944c8863f18f48244fb6


mkdir $HOME/.kube
# Copy conf file to .kube directory for current user
sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config
# Change ownership of file to current user and group
sudo chown $(id -u):$(id -g) $HOME/.kube/config

FOR WORKER NODES
this command is the output when you run sudo kubeadm init in masternodes sudo priviliges
$ sudo kubeadm join 172.0.0.4:6443 --token 9chdwy.oxtybdvvu6xvgan7 --discovery-token-ca-cert-hash sha256:c1c97446fb4c515f49e2e8cfd5ef375a9bc680c8232e944c8863f18f48244fb6

WEAVENET INSTALLATION
kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s-1.11.yaml

**********etiquetamos los nodes para que muestre el role de cada uno
node-role.kubernetes.io/worker=worker

# Create a test deployment
kubectl run --image=nginx webserver 
# Create a service
kubectl expose --type NodePort --port 80 po webserver
# Get the Port for the service
kubectl get svc

open up ngs
$ az vm open-port -g MyClusterDemoGroup --name kube-master --port 30923

en caso de fallo copiamos el ~/.kube/config en todos los nodos


check
http://kube-master.eastus.cloudapp.azure.com
