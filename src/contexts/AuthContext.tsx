import { createContext, ReactNode, useContext } from "react"

interface UserProps {
  name: string
  avatarUrl: string
}

export interface AuthContextData {
  user: UserProps
  signIn: () => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  async function signIn() {
    console.log('entrou');
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Bruno',
        avatarUrl: 'https://github.com/brunoper3s.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => useContext(AuthContext)