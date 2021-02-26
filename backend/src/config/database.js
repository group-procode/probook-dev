import knex from 'knex'

const connectionDb = knex({
    client: 'pg',
    connection: {
      host: 'ec2-54-90-55-211.compute-1.amazonaws.com',
      user: 'jvwgnajtjuyhud',
      password: '26c2946448e02fbe98ef654b6ef80ac5e37f732fa619ae5c0ccb1c60d6c4aa8c',
      database: 'd649gr3avmaif6',
      ssl:true
    }
  });

  export default connectionDb;