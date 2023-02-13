const { default: Register } = require("../src/pages/Register");


describe(Register, () => {


    beforeEach(() => {
        user = new User();
    })


    it('User is created', ()=>{
        expect(user).toEqual([{
    "firstname": "Rael",
	"lastname": "Renaud",
	"username": "Vegele",
	"email": "rael@gmail.com",
	"password": "raelreanaud"
        }]);
    });

    it('user is created', ()=>{

        stack.push('item');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('item')
    })


})