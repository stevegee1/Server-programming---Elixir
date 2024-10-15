(ns app.ui.clipboard
  (:require
   [app.ui.utils :as utils]))

(defn- copy [text]
  (->
   (.writeText js/navigator.clipboard text)
   (.then #(js/alert "Copied to clipboard"))
   (.catch #(js/alert "Failed to copy"))))

(defn- listen-for-click [sel f]
  (let [el (utils/element sel)]
    (when el
      (utils/listen-for-click el f))))

;; TODO: Change this copied text to the address from store
(listen-for-click "#copy-btn" #(copy "text"))
