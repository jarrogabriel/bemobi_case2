const { writeFile } = require('fs');

module.exports = ({ 
        brasilActiveUsersQuantity,
        chileActiveUsersQuantity,
        mexicoActiveUsersQuantity,
        brasilUsersTotal,
        chileUsersTotal,
        mexicoUsersTotal
}) => { 

  brasilUsersTotal = brasilUsersTotal <= 0 ? 0 : brasilUsersTotal;
  chileUsersTotal = chileUsersTotal<= 0 ? 0 : chileUsersTotal;
  mexicoUsersTotal = mexicoUsersTotal<= 0 ? 0 : mexicoUsersTotal;
  brasilActiveUsersQuantity = brasilActiveUsersQuantity <= 0 ? 0 : brasilActiveUsersQuantity;
  chileActiveUsersQuantity = chileActiveUsersQuantity <= 0 ? 0 : chileActiveUsersQuantity;
  mexicoActiveUsersQuantity = mexicoActiveUsersQuantity <= 0 ? 0 : mexicoActiveUsersQuantity;


    const logResult = `
    Brasil: ${brasilUsersTotal}, ${brasilActiveUsersQuantity}\n
    Chile: ${chileUsersTotal} , ${chileActiveUsersQuantity}\n
    Mexico: ${mexicoUsersTotal} , ${mexicoActiveUsersQuantity}` 
    

        

    writeFile('../log/resultado.txt', logResult, function (err) {
        if (err) return console.log(err);
        console.log('ARQUIVO GRAVADO COM SUCESSO');
      });
   
}