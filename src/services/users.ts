export interface User {
  id: number
  firstname: string
  lastname: string
  age: number
  avatar: string
  gender: 'male' | 'female' | 'other'
}

const users: Record<User['id'], Omit<User, 'id'>> = {
  1: {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 28,
    avatar: 'https://avatar.iran.liara.run/public/52',
    gender: 'female',
  },
  2: {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    avatar: 'https://avatar.iran.liara.run/public/30',
    gender: 'male',
  },
  3: {
    firstname: 'Patricia',
    lastname: 'Carpenter',
    age: 33,
    avatar: 'https://avatar.iran.liara.run/public/58',
    gender: 'female',
  },
  4: {
    firstname: 'Angelina',
    lastname: 'Drew',
    age: 27,
    avatar: 'https://avatar.iran.liara.run/public/61',
    gender: 'female',
  },
  5: {
    firstname: 'Kevin',
    lastname: 'Theloser',
    age: 37,
    avatar: 'https://avatar.iran.liara.run/public/21',
    gender: 'male',
  },
} as const

export async function fetchUserList() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Object.entries(users).map(([id, user]) => {
          return { id: parseInt(id), ...user }
        }),
      )
    }, 1000)
  })
}

export async function fetchUser(userId: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[userId]) {
        resolve({ id: userId, ...users[userId] })
      }

      reject(new Error(`No user for id: ${userId}`))
    }, 1000)
  })
}
