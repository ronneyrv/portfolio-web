import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { login } from "../../services/auth";
import { useAuth } from "../../auth/useAuth";

function AdminAccess() {
  const { login: authenticate, logout, isAuthenticated, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin() {
    try {
      setErrorMessage("");

      const response = await login({
        username,
        password,
      });

      authenticate(response.token);
      setIsOpen(false);
      setUsername("");
      setPassword("");
    } catch {
      setErrorMessage("Usuário ou senha inválidos.");
    }
  }

  function handleLogout() {
    logout();
    setIsOpen(false);
  }

  return (
    <div className="relative z-50">
      <button
        type="button"
        aria-label={
          isAuthenticated ? "Menu administrativo" : "Login administrativo"
        }
        onClick={() => setIsOpen((current) => !current)}
        className="text-slate-400 transition-colors hover:text-white"
      >
        {isAuthenticated ? <FaLockOpen size={16} /> : <FaLock size={16} />}
      </button>

      {!isAuthenticated && isOpen && (
        <div className="absolute right-0 mt-3 w-64 rounded-lg border border-slate-700 bg-slate-900 p-4 shadow-xl">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
            />

            {errorMessage && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded bg-slate-700 px-3 py-2 text-sm text-white transition-colors hover:bg-slate-600"
            >
              Entrar
            </button>
          </div>
        </div>
      )}

      {isAuthenticated && isOpen && (
        <div className="absolute right-0 mt-3 w-52 rounded-lg border border-slate-700 bg-slate-900 p-4 shadow-xl">
          <p className="mb-3 text-sm text-slate-300">{user?.username}</p>

          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="block w-full rounded px-3 py-2 text-center text-sm text-white transition-colors hover:bg-slate-800"
          >
            Administração
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-1 block w-full rounded px-3 py-2 text-left text-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminAccess;
