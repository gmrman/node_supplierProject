var sqlstr = {
    test: {
        insert: 'INSERT INTO test(user, password, sex, address) VALUES(?,?,?,?)',
        // update:'update book set name=?, age=? where id=?',
        delete: 'delete from spah_t where spah001=?',
        // queryById: 'select * from book where id=?',
        queryAll: 'select user, password, sex, address from test1'
    }
};

module.exports = sqlstr;