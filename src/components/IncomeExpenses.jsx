import React  from 'react'


function IncomeExpenses({info}) {
    
    const income = info
    .filter((transaction) => transaction.number > 0)
    .reduce((total, transaction) => total + parseInt( transaction.number), 0)


    const expense =  info.filter((transaction)=> transaction.number<0)
    .reduce((total,transaction)=> total+ parseInt(transaction.number),0 )
    return (
        <div className='income-expense-container'>
            <div>
                <h4>Income</h4>
                <p className='money income'>
                    $ {income }                </p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className='money expense'>
                    $ {expense}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
