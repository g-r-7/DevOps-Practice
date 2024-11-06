# Déploiement sur Kubernetes

## Installations
- **kubernetes**
- **kubectl**
- **Docker**

## Déploiement

### 1. Création cluster

Créer un cluster avec deux replicas qui s'exécutent chacun sur un noeud

```bash
minikube start --nodes 3 --driver=docker
```

### 2. Créer le namespace

```bash
kubectl apply -f namespace.yaml
```

### 3. Créer les secrets

Commencer par se placer dans le dossier k8s

```bash
kubectl apply -f backend-secret.yaml
```

### 4. Créer le PVC

```bash
kubectl apply -f db-data-persistentvolumeclaim.yaml
```

### 5. Déployer PostgreSQL et exposer le service

```bash
kubectl apply -f database-deployment.yaml
kubectl apply -f database-service.yaml
```

### 6. Déployer le backend et exposer le service

```bash
kubectl apply -f backapp-deployment.yaml
kubectl apply -f backapp-service.yaml
```

### 7. Configurer la politique réseau

```bash
kubectl apply -f network-policies.yaml
```

#### En une commande:

```bash
kubectl apply -f namespace.yaml && kubectl apply -f backend-secret.yaml && kubectl apply -f db-data-persistentvolumeclaim.yaml && kubectl apply -f database-deployment.yaml && kubectl apply -f database-service.yaml && kubectl apply -f backapp-deployment.yaml && kubectl apply -f backapp-service.yaml && kubectl apply -f network-policies.yaml
```

### 8. Accéder au service
```bash
minikube service backapp -n backend-app
```

### 6. Tests

- voir si les pods sont en cours d'exécution:
  ```bash
  kubectl get pods -n backend-app
  ```
- vérifier que les services sont exposés:
  ```bash
  kubectl get services -n backend-app
  ```

  