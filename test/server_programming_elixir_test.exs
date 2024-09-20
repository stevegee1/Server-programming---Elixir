defmodule ServerProgrammingElixirTest do
  use ExUnit.Case
  doctest ServerProgrammingElixir

  test "greets the world" do
    assert ServerProgrammingElixir.hello() == :world
  end
end
