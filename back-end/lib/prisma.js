const { PrismaClient } = require('@prisma/client');


var cachedPrisma

//let prisma: PrismaClient;
if(process.env.NODE_ENV=== "production"){
    var prisma = new PrismaClient();
}else{
    if(!cachedPrisma){
        cachedPrisma = new PrismaClient();

    }
    prisma = cachedPrisma;
}

exports.prismaClient = prisma;