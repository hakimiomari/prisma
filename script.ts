import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const user = await prisma.user.create({
//     data: {
//       name: "Kamranullah Omari",
//       email: "hakimi@example.com",
//     },
//   });

const users = await prisma.user.findMany();
  console.log(users);
};

main()
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => prisma.$disconnect());
