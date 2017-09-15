var expect = require('chai').expect;
var Foo = require('./foo');


var foo = new Foo('baz');
describe('测试相等或不相等', function () {

    it('4 加 5 应该等于9', function () {
        expect(4 + 5).to.be.equal(9);
    });

    it('4 加 5 应该不等于10', function () {
        expect(4 + 5).to.be.not.equal(10);
    });
   
});

describe('deep 用来深度比较2个对象', () => {
    
    it("foo deep 等于 {bar: 'baz'}", function () {
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    });

    it("期待返回对象foo 'foo.bar.baz'值是'quux'", () => {
        expect({ foo: { bar: { baz: 'quux' } } })
            .to.have.deep.property('foo.bar.baz', 'quux')
    })
})


describe('布尔值为true', () => {

    it("everthing 值为真", () => {
        expect('everthing').to.be.ok;
    });
    
    it("false值不为真", () => {
        expect(false).to.not.be.ok;
    })
})

describe("断言目标字符串包含另一个字符串", () => {

    it(" foobar是否包含'bar' ", () => {
        expect('foobar').to.have.string('bar')
    })

})

describe("判断类型", () => {

    it("test 是一个string型", () => {
        expect('test').to.be.a('string');
    })

    it("{ foo: 'bar' } 是一个对象", () => {
        expect({ foo: 'bar' }).to.be.an('object');
    })

    it("foo是Foo的实例", () => {
        expect(foo).to.be.an.instanceof(Foo);
    })
})

describe("断言字符串,数组包含 include", () => {

    it(" foobar 是否包含'bar' ", () => {
        expect('foobar').to.include('bar')
    })

    it("[1, 2, 3] 是否包含 2 ", () => {
        expect([1, 2, 3]).to.include(2);  
    })

})




describe("测试对象是否包含某key", () => {

    var obj = { foo: 'bar', hello: 'universe' }
    it("测试对象{ foo: 'bar', hello: 'universe' }是否包含某'foo' ", () => {
        expect(obj).to.include.keys('foo');
    })

})

describe("断言目标的长度为0", () => {
    //对于数组和字符串，它检查length属性，对于对象，它检查可枚举属性的数量
    
    it("测试[]是否为空", () => {
        expect([]).to.be.empty
    })

    it("测试[]是否为空", () => {
        expect('').to.be.empty
    })
    
    it("测试[]是否为空", () => {
        expect({}).to.be.empty
    })

})

describe("断言目标匹配到一个正则表达式", () => {
    
    it("测试foobar是否匹配到 /^foo/", () => {
        expect('foobar').to.match(/^foo/)
    })

})

describe("断言目标严格等于", () => {
    
    it("测试字符串", () => {
        expect('hello').to.equal('hello')
    })
    it("测试数字", () => {
        expect(42).to.equal(42)
    })
    it("测试对象", () => {
        expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' })
    })

})
describe("断言目标在某个区间内", () => {
    
    it("测试7是否在（5，10）之间", () => {
        expect(7).to.be.within(5, 10)
    })

})

describe("断言目标不大于（小于或等于）", () => {
    
    it("测试5是否不大于6", () => {
        expect(5).to.be.at.most(6)
    })

})
describe("断言目标大于", () => {
    
    it("测试10是否大于5", () => {
        expect(10).to.be.above(5)
    })

})

describe("断言目标不小于（大于或等于）", () => {
    
    it("测试10是否不小于10", () => {
        expect(10).to.be.at.least(10)
    })

})

describe("断言目标小于", () => {
    
    it("测试5是否不小于10", () => {
        expect(5).to.be.below(10)
    })

})

