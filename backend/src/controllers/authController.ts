import { type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body;

    // TODO: implement validation

    // Check if user username or email already exists
    const existingUser = await checkExistingUser(username, email);

    if (existingUser) {
      const field = existingUser.username === username ? 'username' : 'email';
      return res.status(400).json({
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
        success: false,
      });
    }

    // Hash password
    const generateSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, generateSalt);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: 'User registered successfully',
      success: true,
      data: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

const checkExistingUser = async (username: string, email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  return user;
};

export { register };
