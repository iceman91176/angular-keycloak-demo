# AngularKeycloakDemo

Konfiguration ueber ENV-Variablen. Diese werden zur Laufzeit per XHR-Request aus einem JSON-File geladen. Die Config-Datei liegt unter ./assets/configdata/appconfig.json

Das Schema ist

{
"APP_KEYCLOAK_URL":"https://KEYCLOAK-FQDN/auth",
"APP_KEYCLOAK_REALM":"REALM-NAME",
"APP_KEYCLOAK_CLIENT_ID":"webapp-id",
"APP_API_URL":"BASE-URL-TO-API-GATEWAY",
"APP_API_SMDBPATH":"/smdb"
}

Im DEV-Profil wird diese Datei automatisch aus Umgebungsvariablen erzeugt. Hier kann die Datei dotenv.example als Vorlage verwendet werden.
Produktiv kann die Datei z.B: ueber eine Kubernetes-Configmap eingebunden werden




