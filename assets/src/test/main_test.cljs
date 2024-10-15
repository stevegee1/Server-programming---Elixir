(ns test.main-test
  (:require
   [cljs.test :refer-macros [deftest is testing]]))

(deftest a-test
  (testing "Doing a dummy test"
    (is (= 1 (+ 1 0)))))
