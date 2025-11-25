# React CI/CD Cloud

Projeto frontend (Vite/React) empacotado com Docker (Node 18 build + NGINX) e pipeline de CI/CD via GitHub Actions para publicar imagem no ECR e rodar em ECS Fargate.

## O que tem aqui
- `Dockerfile`: build multi-stage (npm ci → npm run build → serve com NGINX).
- `.github/workflows/deploy.yml`: workflow manual (`workflow_dispatch`) que roda testes, builda/pusha imagem pro ECR e aplica Terraform para criar/atualizar ECS.
- `.github/workflows/infra.tf`: infra mínima de ECR + ECS Fargate público (usa VPC default, porta 80, CPU 256/Mem 512).

## Requisitos
- Node 18+ e npm para uso local.
- Docker para testar a imagem.
- Conta AWS com permissões de ECR/ECS/IAM/EC2/CloudWatch.
- Secrets no GitHub: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`, `AWS_REGION` (se diferente de `sa-east-1`).

## Como usar
### Rodar local
```bash
npm ci
npm run dev   
npm run build 
```

### Testar imagem Docker
```bash
docker build -t react-ci-cd-cloud .
docker run --rm -p 8080:80 react-ci-cd-cloud
# abrir http://localhost:8080
```

### Pipeline CI/CD (GitHub Actions)
1. Configure os secrets citados acima no repositório.
2. Opcional: ajuste nomes em `env` no `.github/workflows/deploy.yml` (repo ECR, cluster/serviço ECS, região).
3. Dispare o workflow manualmente (aba Actions → Build and Deploy to ECR/ECS).
   - Passos: checkout → npm ci/test/build → login ECR → build/push imagem → `terraform apply` (ECR/ECS).
4. O serviço ECS subirá como Fargate, com IP público na VPC default (porta 80).

### Observações
- Se o ECR já existir, o passo “Ensure ECR repository exists” evita falha de push; caso prefira controlar pelo Terraform, remova esse passo do workflow.
- Para manter estado Terraform entre execuções, configure backend remoto (ex.: S3 + DynamoDB); atualmente o state é local ao runner.
- Se usar client-side routing, o `nginx.conf` já faz fallback para `index.html`.
