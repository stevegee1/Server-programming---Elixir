(ns app.main
  (:require
   [app.ui.dropdown]
   [app.ui.clipboard]
   ["phoenix_html"]
   ["phoenix" :refer [Socket]]
   ["phoenix_live_view" :refer [LiveSocket]]))

(def csrf-token (-> "meta[name='csrf-token']"
                    (js/document.querySelector)
                    (.getAttribute "content")))

(defn- live-socket-params []
  (clj->js {:params {:_csrf_token csrf-token}}))

(defn live-socket []
  (LiveSocket. "/live" Socket (live-socket-params)))

(defn- set-up-live-socket []
  (set! (.. js/window -liveSocket)
        (live-socket)))

(defn- connect-live-socket []
  (set-up-live-socket)
  (.connect (live-socket)))

(defn init!
  "This function is called by `shadow-cljs` once on startup or when
   app is refreshed."
  []
  (connect-live-socket))

(defn stop! []
  (println "App stopped!"))

(defn reload!
  "Called on browser reload, during development, by shadow-cljs."
  []
  (println "Code updated!"))
