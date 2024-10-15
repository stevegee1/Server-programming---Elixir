(ns app.ui.dropdown
  (:require
   [app.ui.utils :as utils])
  (:refer-clojure :exclude [contains?]))

(def home-open-btn (utils/element "#home-open-menu"))
(def home-close-btn (utils/element "#home-close-menu"))
(def home-menu-content (utils/element "#home-menu-content"))
(def nav-menu-btn (utils/element "#nav-menu-btn"))
(def nav-menu-content (utils/element "#nav-menu-content"))
(def show-more-btn (utils/element "#show-more"))
(def show-less-btn (utils/element "#show-less"))
(def expandable-content (utils/element "#expandable-content"))

(defn toggle-display [el]
  (if (utils/displayed? el)
    (utils/hide el)
    (utils/show el)))

(defn- hide [evt el dropdown]
  (when (not (utils/clicked? el evt))
    (utils/hide dropdown)))

(defn- listen-for-close [el dropdown]
  (when el
    (utils/listen-for-click-out dropdown
                                #(hide % el dropdown))))

(defn- listen-for-btn-click [btn dropdown]
  (when btn
    (utils/listen-for-click btn
                            toggle-display
                            dropdown
                            #(listen-for-close btn dropdown))))

(defn listen-for-show-more []
  (utils/listen-for-click show-more-btn
                          (fn []
                            (utils/remove-class expandable-content "h-[250px]")
                            (utils/hide show-more-btn)
                            (utils/show show-less-btn))))

(defn listen-for-show-less []
  (utils/listen-for-click show-less-btn
                          (fn []
                            (utils/add-class expandable-content "h-[250px]")
                            (utils/hide show-less-btn)
                            (utils/show show-more-btn))))

(defn- listen-for-menu-open [btn content]
  (utils/listen-for-click btn
                          utils/show
                          content))

(defn- listen-for-menu-close [btn content]
  (utils/listen-for-click btn
                          utils/hide
                          content))

(defn register-listeners []
  (listen-for-btn-click nav-menu-btn nav-menu-content)
  (listen-for-show-less)
  (listen-for-show-more)
  (listen-for-menu-open home-open-btn home-menu-content)
  (listen-for-menu-close home-close-btn home-menu-content))

(register-listeners)
