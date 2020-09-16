<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br>
    <h2>{{panel1}}</h2>
    <ul>
      <li>
        <input type="text" class="form-control" placeholder="Nhập cái gì đó" v-model="name">
      </li>
      <li>
        <button type="submit" class="lol" @click="add">Lưu</button>
      </li>
    </ul>
    <br>
    <h2>{{panel2}}</h2>
    <ul>
    <div v-for="x in default_todo">
      <li>
      <label class="container">
          <span v-bind:class = "{gach:x.done}">{{x.text}}</span>
          <input type="checkbox" v-model="x.done" @change="update_done()" >
          <span class="checkmark"></span>
          <button class="lol2" @click="remove(x)" >Xóa</button>
      </label>
      </li>
      </div>
      
    </ul>
  </div>
</template>





<script>
//localStorage.clear(); xa toan bo data da luu
export default {
  name: 'mainphu',
  data () {
    return {
      msg: 'ToDo App của tôi',
      panel1: 'Nhập dữ liệu',
      panel2: 'Kết quả',
      name:'',
      fuck:'',
      default_todo: 
      [
        { text: "Day la cai gi", done : false  },
        { text: "Cai gi la day", done : true  },
        { text: "Cai day la gi", done : false  }
      ]
    }
},
mounted() {   //cap nhat lai danh sach todo
    if (localStorage.getItem('default_todo')) {
      try {
        this.default_todo = JSON.parse(localStorage.getItem('default_todo'));
      } catch(e) {
        localStorage.removeItem('default_todo');
      }
    }
  },
  methods: {
    add() {
      // ensure they actually typed something
      if (this.name.length) 
      {
        this.default_todo.push({ text: this.name,done: false });
        this.name = '';
        this.save();
      }
    },
    remove(x) {
      const index = this.default_todo.indexOf(x);
      this.default_todo.splice((index), 1);
      this.save();
    },
    save() {
      const parsed = JSON.stringify(this.default_todo);
      localStorage.setItem('default_todo', parsed);
    },
    update_done()
    {
      this.save(); 
    }
  }
}
</script>







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.lol {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.lol2{
   background-color: #4CAF50;
  color: white;
  padding: 8px 30px;
  margin: 0px 50px;
  border: none;
  border-radius: 14px;
  cursor: pointer;

}

input[type=text] {
  width: 100%;
  padding: 12px 30px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.gach{
  text-decoration-line: line-through;
}

</style>
