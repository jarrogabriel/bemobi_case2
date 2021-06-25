const fileWriter = require('./fileWriter');

module.exports =  (rl) => {
    let brasilActiveUsersQuantity = 0;
    let chileActiveUsersQuantity = 0;
    let mexicoActiveUsersQuantity = 0;

    let brasilUsersTotal = 0;
    let chileUsersTotal = 0;
    let mexicoUsersTotal = 0;
    


    const everyDDI = {
        55: (status) => {
            brasilUsersTotal++;
            status === 'assinado' ? brasilActiveUsersQuantity++ : brasilActiveUsersQuantity--;
        },
        56: (status) => {
            chileUsersTotal++;
            status === 'assinado' ? chileActiveUsersQuantity++ : chileActiveUsersQuantity--;
        },
        52: (status) => {
            mexicoUsersTotal++;
            status === 'assinado' ? mexicoActiveUsersQuantity++ : mexicoActiveUsersQuantity--;
        }
    };

     rl.on('line', (line) => {
        if (!line) return;

        // Desestruturação de array por posições
        const [cellphone, status] = line.split(' ');
        const ddi = cellphone.slice(0, 2);

        const countCountryUsers = everyDDI[ddi];
        countCountryUsers(status);

        
    });



    rl.on('close', () =>
    {
        const data = {
            brasilActiveUsersQuantity,
            chileActiveUsersQuantity,
            mexicoActiveUsersQuantity,
            brasilUsersTotal,
            chileUsersTotal,
            mexicoUsersTotal
        };

        fileWriter(data);
    });
     
    
        
    
    
       
}

