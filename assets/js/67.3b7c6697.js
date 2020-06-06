(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{458:function(e,n,t){"use strict";t.r(n);var a=t(41),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),t("p",[e._v("Keycloak is used for authentication.")]),e._v(" "),t("p",[e._v("To set up keycloak server, please refer to Keycloak\n"),t("a",{attrs:{href:"https://www.keycloak.org/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("As all MFE widgets use the same Keycloak instance, it should be\ninitialized on a container of all widgets.")]),e._v(" "),t("p",[e._v("Using Details widget generated using Entando JHipster blueprint as an\nexample, let’s get familiar with authentication implementation.")]),e._v(" "),t("p",[e._v("As mentioned before, widget auth implementation assumes that Keycloak is\ninitialized outside of the widget. In Details example, it is done in\nindex.html where Keycloak server’s keycloak.js is used.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<head>\n    <script src=\"keycloak.js\"><\/script>\n    <script>\n        var keycloak = new Keycloak();\n        keycloak\n          .init({ onLoad: 'check-sso' })\n          .success(onInit);\n    <\/script>\n</head>\n")])])]),t("blockquote",[t("p",[t("strong",[e._v("Note")])]),e._v(" "),t("p",[e._v("keycloak.js is provided by your Keycloak server at\n"),t("code",[e._v("<SERVER_URL:PORT>/auth/js/keycloak.js")])])]),e._v(" "),t("p",[e._v("Keycloak is initialized by passing Keycloak server path, realm and\nclient ID and calling "),t("code",[e._v("init({/* options */})")]),e._v(" function.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("const keycloak = Keycloak({\n  url: 'http://localhost:9080/auth',\n  realm: 'jhipster',\n  clientId: 'jhipster-entando-react-client',\n});\n\nkeycloak\n  .init({ onLoad: 'check-sso' })\n  .success(onInit);\n")])])]),t("p",[e._v("Depending on Keycloak version you are using, "),t("code",[e._v("init()")]),e._v(" function can\nreturn a Promise (newer versions support "),t("code",[e._v("promiseType: 'native'")]),e._v("\noption).")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("keycloak\n  .init({ onLoad: 'check-sso', promiseType: 'native' })\n  .then(authenticated => {\n    alert(authenticated ? 'Authenticated' : 'Not authenticated');\n  })\n  .catch(() => {\n    alert('Failed to initialize');\n  });\n")])])]),t("p",[e._v("All the Keycloak events are made custom events - this way widgets could\nreact to them if a need arises.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function createKcDispatcher(payload) {\n  return () => window.dispatchEvent(new CustomEvent('keycloak', { detail: payload }));\n}\n\nkeycloak.onReady = createKcDispatcher({ eventType: 'onReady' });\nkeycloak.onAuthSuccess = createKcDispatcher({ eventType: 'onAuthSuccess' });\nkeycloak.onAuthError = createKcDispatcher({ eventType: 'onAuthError' });\nkeycloak.onAuthRefreshSuccess = createKcDispatcher({ eventType: 'onAuthRefreshSuccess' });\nkeycloak.onAuthRefreshError = createKcDispatcher({ eventType: 'onAuthRefreshError' });\nkeycloak.onAuthLogout = createKcDispatcher({ eventType: 'onAuthLogout' });\nkeycloak.onTokenExpired = createKcDispatcher({ eventType: 'onTokenExpired' });\nconst onInit = createKcDispatcher({ eventType: 'onInit' });\n")])])]),t("p",[e._v("Keycloak object is then stored into "),t("code",[e._v("window.entando")]),e._v(" object for widgets\nto have access to.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("window.entando = {\n  ...(window.entando || {}),\n  keycloak,\n};\n")])])]),t("p",[e._v("On the widget side inside the custom element creation logic Keycloak\nobject is accessed and passed into the component via Keycloak context")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("const getKeycloakInstance = () =>\n  (window &&\n    window.entando &&\n    window.entando.keycloak &&\n    { ...window.entando.keycloak, initialized: true }\n  ) || { initialized: false };\n\n\n// ...\n\nconstructor(...args) {\n  // ...\n  this.keycloak = getKeycloakInstance();\n}\n\nconnectedCallback() {\n  // ...\n  ReactDOM.render(\n    <KeycloakContext.Provider value={this.keycloak}>\n      <ConferenceDetailsContainer />\n    </KeycloakContext.Provider>,\n    this.mountPoint\n  );\n}\n")])])]),t("p",[e._v("And on the component side you can show different content depending on\nthe authentication status")]),e._v(" "),t("p",[e._v("At "),t("code",[e._v("auth/KeycloakViews.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("export const AuthenticatedView = ({ children, keycloak }) => {\n  const authenticated = keycloak.initialized && keycloak.authenticated;\n  return authenticated ? children : null;\n};\n\nexport const UnauthenticatedView = ({ children, keycloak }) => {\n  const authenticated = keycloak.initialized && keycloak.authenticated;\n  return !authenticated ? children : null;\n};\n")])])]),t("p",[e._v("At "),t("code",[e._v("components/ConferenceDetailsContainer.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("render() {\n  const { conference, loading } = this.state;\n  const { t, keycloak } = this.props;\n\n  return (\n    <ThemeProvider theme={this.theme}>\n      <UnauthenticatedView keycloak={keycloak}>\n        {t('common.notAuthenticated')}\n      </UnauthenticatedView>\n      <AuthenticatedView keycloak={keycloak}>\n        {loading && t('common.loading')}\n        {!loading && <ConferenceDetails conference={conference} />}\n      </AuthenticatedView>\n    </ThemeProvider>\n  );\n}\n")])])]),t("blockquote",[t("p",[t("strong",[e._v("Note")])]),e._v(" "),t("p",[e._v("Keycloak object is accessible via props because of "),t("code",[e._v("withKeycloak")]),e._v(" HOC:\n"),t("code",[e._v("export default withKeycloak(ConferenceDetailsContainer);")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);