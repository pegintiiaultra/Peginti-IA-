# Pegintichat-
Pegintichat est un agent chat chargé de répondre, d'aider et de guider les entreprises, utilisateur dans les plateformes réseaux sociaux ou pour un projet d'entreprise avec nécessité de gestion de clientèle en temps réel. C'est un module pilote de PEGINTI IA, propriété intellectuelle de TOMO OMBEDE BARNABÉ BERTRAND.
 `.github/workflows/configure-domain.yml`**
```yml
name: Configure Domain
on:
  push:
    branches:
      - main
jobs:
  configure-domain:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Configure domain
        run: |
          echo "peginti-ia.tk" > CNAME
          git config --global user.email "pegintiiaultra@gmail.com"
          git config --global user.name "pegintiiaultra"
          git add CNAME
          git commit -m "Configure domain"
          git push origin main
```
`.github/workflows/deploy-gh-pages.yml`
```
