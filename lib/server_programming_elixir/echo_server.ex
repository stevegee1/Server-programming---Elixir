defmodule ServerProgrammingElixir.EchoServer do
  use GenServer

  require Logger

  defstruct [:listen_socket]

  def start_link([] = _opts) do
    GenServer.start_link(__MODULE__, :no_state, name: __MODULE__)
  end

  @impl true
  def init(:no_state) do
    Logger.info("Starting echo server...")

    listen_options = [
      mode: :binary,
      active: false,
      reuseaddr: true,
      exit_on_close: false
    ]

    case :gen_tcp.listen(5001, listen_options) do
      {:ok, listen_socket} ->
        state = %__MODULE__{listen_socket: listen_socket}
        {:ok, state, {:continue, :accept}}

      {:error, reason} ->
        {:stop, reason}
    end
  end

  @impl true
  def handle_continue(:accept, %__MODULE__{} = state) do
    case :gen_tcp.accept(state.listen_socket) do
      {:ok, socket} ->
        handle_connection(socket)
        {:noreply, state, {:continue, :accept}}

      {:error, reason} ->
        {:stop, reason}
    end
  end

  ## helpers

  defp handle_connection(socket) do
    case recv_until_closed(socket, _buffer = "") do
      {:ok, data} -> :gen_tcp.send(socket, data)
      {:error, reason} -> Logger.error("Failed to receive data: #{inspect(reason)}")
    end

    :gen_tcp.close(socket)
  end

  defp recv_until_closed(socket, buffer) do
    case :gen_tcp.recv(socket, 0, 10_000) do
      {:ok, data} ->
        recv_until_closed(socket, [buffer, data])

      {:error, :closed} ->
        IO.puts("I received it")
        {:ok, buffer}

      {:error, reason} ->
        IO.puts("I did not receive it")
        {:error, reason}
    end
  end
end
