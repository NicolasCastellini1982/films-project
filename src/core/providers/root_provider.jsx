import { AuthProvider } from "../../features/auth/provider/auth_provider";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider
      fallback={
        <div>
          <h1>Cargando...</h1>
        </div>
      }
    >
      {children}
    </AuthProvider>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 09d6f3475cf093be4b0fdf587f0d9996458620b4

export default RootProvider;