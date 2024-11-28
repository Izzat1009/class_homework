
{
    class Student{
        constructor(fname, lname, tel, address){
            this.fname = fname
            this.lname = lname
            this.tel = tel
            this.address = address
        }
        getFullName(){
        return `${this.fname}, ${this.lname}`
        }
        info(){
            return `${this.fname} ${this.lname} ${this.tel} ${this.address}`
        }
    }

    let student = new Student("Bahodir", "Jalilov", 998815333, "Samarqand darvoza")
    console.log(student);
    console.log(student.getFullName());
    console.log(student.info());
    
    
}

{
    class Teacher{
        constructor(fname, lname, address, salary, level){
            this.fname = fname
            this.lname = lname
            this.address = address
            this.salary = salary
            this.level = level
        }
        getFullName(){
        return `${this.fname}, ${this.lname}`
        }
        descrtiption(){
            return `${this.fname} ${this.lname} ${this.salary} ${this.address} ${this.level}`
        }
    }

    let teacher = new Teacher("Boburmirzo", "BRM", "1000$", "Namangan", 4)
    console.log(teacher);
    console.log(teacher.getFullName());
    console.log(teacher.descrtiption());
    
    
}

{
    class Group{
        constructor(name, room, level, StudentCounts, teacher){
            this.name = name
            this.room = room
            this.level = level
            this.StudentCounts = StudentCounts
            this.teacher = teacher
        }
        fullInformation(){
            return `${this.name} ${this.room} ${this.StudentCounts} ${this.teacher}`
        }
    }

    let group = new Group("N83", "Slack", 4, 17, "Boburmirzo")
    console.log(group);
    console.log(group.fullInformation());
    
    
}

{
    class Paymen{
        constructor(from, to, amount, date, status){
            this.from = from
            this.to = to
            this.amount = amount
            this.date = date
            this.status = status
        }
        getStatus(){
        return `${this.from}, ${this.to} ${this.amount} ${this.date} ${this.status}`
        }
    }

    let paymen = new Paymen("Ibrohim", "Muhammadrasil", 180000, "11/28/2024", true )
    console.log(paymen);
    console.log(paymen.getStatus());
    
    
}

{
    class Salary{
        constructor(to, amount, type, date, status){
            this.to = to
            this.amount = amount
            this.type = type
            this.date = date
            this.status = status
        }
        getFullinfo(){
        return `${this.to}, ${this.amount} ${this.type} ${this.date} ${this.status}`
        }
    }

    let salary = new Salary("Mike", "700", "USD", "11/28/24", true)
    console.log(salary);
    console.log(salary.getFullinfo());
    
    
}

{
    class Organization{
        constructor(name, founder, address, employeeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeeCount = employeeCount
        }
        getInfo(){
            return `${this.name} ${this.founder} ${this.address} ${this.employeeCount}`
        }
    }

    let organization = new Organization("apple", "Steve Jobs", "CA95014", 5000)
    console.log(organization);
    console.log(organization.getInfo());
    
    
}