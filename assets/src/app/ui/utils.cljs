(ns app.ui.utils
  (:require
   [goog.events :as gevents])
  (:refer-clojure :exclude [contains?]))

(defn- set-display [el s]
  (set! (.. el -style -display) s))

(defn displayed? [el]
  (= (.. el -style -display) "block"))

(defn hide [el]
  (set-display el "none"))

(defn show [el]
  (set-display el "block"))

(defn add-class [el class]
  (let [el-classList (.-classList el)]
    (.add el-classList class)))

(defn remove-class [el class]
  (let [el-classList (.-classList el)]
    (.remove el-classList class)))

(defn contains? [el1 el2]
  (and (not= el1 el2) (.contains el1 el2)))

(defn clicked?
  "True if `evt` is a click event generated within `el`."
  [el evt]
  (contains? el (.-target evt)))

(defn- on-click-out [el f evt]
  (when (not (clicked? el evt))
    (f evt)))

(defn- listen [el s f]
  (when el
    (gevents/listen el s f)))

(defn listen-for-click
  ([el f]
   (listen el "click" f))
  ([el1 f el2]
   (listen el1 "click" #(f el2)))
  ([el1 f el2 g]
   (listen el1 "click" (fn []
                         (f el2)
                         (g el2)))))

(defn listen-for-click-out [el f]
  (when el
    (listen-for-click js/window #(on-click-out el f %))))

(defn element [sel]
  (.querySelector js/document sel))
