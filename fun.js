var coll = document.querySelector(".collapsible");
// var coll = document.getElementsByClassName("collapsible");
var content = document.querySelector(".alloc1-content");
var drop_icon = document.querySelector(".alloc-head");
var icon = document.querySelector(".collapsible");
// var menuFirst = document.querySelector(".menu-drop-down");
var menu = document.querySelector(".menu-drop-down");
var menu2 = document.querySelector(".menu-drop-down2");
var option_content = document.querySelector(".option-content");
var option_content2 = document.querySelector(".option-content2");
var deleteIcon = document.querySelector(".deleteIcon");
var menu3 = document.querySelector(".menu-drop-down3");
var option_content3 = document.querySelector(".option-content3");
var option_menu3 = document.querySelector(".option-menu3");
var my_tbody = document.querySelector(".tbody");
var my_table = document.querySelector(".my-table");
var plus = document.querySelector(".plus");
var plus1 = document.querySelector("#bauplus");
var plus2 = document.querySelector("#salesplus");
var plus3 = document.querySelector("#internalplus");
var bau = document.querySelector(".bau");
var sales = document.querySelector(".sales");
var internal = document.querySelector(".internal");
var bauid = document.querySelector("#bauid");
var salesid = document.querySelector("#salesid");
var internalid = document.querySelector("#internalid");
var total = document.querySelector(".total");
var total_col = document.querySelector(".total_hours_col_tr");

var inputValue = document.querySelectorAll(".input_box");

function onDeleteColumn(e, newIndex) {
  console.log(Array.from(my_table.querySelectorAll("tr")));
  var myArr = Array.from(my_table.querySelectorAll("tr"));

  // my_table.deleteRow(newIndex);
  // total_col.cells[4].innerText = +total_col.cells[4].innerText - +e.value;
}
function onChangeFunction(e) {
  var newTotal = e.closest("tr").querySelector(".total");
  newTotal.value = +newTotal.value + +e.value;
}
function onChangeColumn(e, val) {
  const colInd = Array.from(e.closest("tr").querySelectorAll("td")).findIndex(
    (ev) => ev.querySelector("input") == e
  );
  if (val != undefined) {
    total_col.cells[colInd + 1].innerText =
      +total_col.cells[colInd + 1].innerText + +e.value;
  } else {
    total_col.cells[colInd].innerText =
      +total_col.cells[colInd].innerText + +e.value;
  }
}
inputValue.forEach((e) => {
  e.onchange = () => {
    onChangeFunction(e);
    onChangeColumn(e);
  };
});

coll.onclick = () => {
  // debugger;
  console.log("hello");
  if (content.style.display === "block") {
    content.style.display = "none";
    icon.textContent = "expand_more";
  } else {
    icon.textContent = "expand_less";
    content.style.display = "block";
  }
};

menu.onclick = () => {
  if (option_content.style.display === "block") {
    option_content.style.display = "none";
    menu.textContent = "expand_more";
  } else {
    menu.textContent = "expand_less";
    option_content.style.display = "block";
  }
};
menu2.onclick = () => {
  if (option_content2.style.display === "block") {
    option_content2.style.display = "none";
    menu2.textContent = "expand_more";
  } else {
    menu2.textContent = "expand_less";
    option_content2.style.display = "block";
  }
};

menu3.onclick = () => {
  if (option_content3.style.display === "block") {
    option_content3.style.display = "none";
    menu3.textContent = "expand_more";
  } else {
    menu3.textContent = "expand_less";
    option_content3.style.display = "block";
  }
};

var tr_content = `
<td>
<select class="form-select">
  <option value="0">Project</option>
  <option value="1">BAU_006 L & D</option>
  <option value="2">BAU_007 L & D</option>
  <option value="3">BAU_008 L & D</option>
</select>
</td>
<td>
<select class="form-select">
  <option value="1">Public Holiday</option>
</select>
</td>
<td>
<input type="text" id="comment" />
</td>

<td>
<input type="text" class="input_box 1" />
</td>

<td>
<input type="text" class="input_box 2" />
</td>

<td>
<input type="text" class="input_box 3" />
</td>

<td>
<input type="text" class="input_box 4" />
</td>

<td>
<input type="text" class="input_box 5" />
</td>

<td>
<input type="text" class="input_box 6" />
</td>

<td>
<input type="text" class="input_box 7" />
</td>

<td>
<input type="text" class="input_box total" readonly />
</td>

<td>
<div class="add_minus">
<span class="material-symbols-outlined addMinusIcon" onClick="addRow(this)">
  add
</span>
<span class="material-symbols-outlined addMinusIcon" onClick="deleteRow(this)">
  remove
</span>
</div>
</td>

`;
var tr_content2 = `
<td>
<select class="form-select">
  <option value="0">Project</option>
  <option value="1">BAU_006 L & D</option>
  <option value="2">BAU_007 L & D</option>
  <option value="3">BAU_008 L & D</option>
</select>
</td>
<td>
<select class="form-select">
  <option value="1">Public Holiday</option>
</select>
</td>
<td>
<input type="text" id="comment" />
</td>

<td>
<input type="text" class="input_box 1" />
</td>

<td>
<input type="text" class="input_box 2" />
</td>

<td>
<input type="text" class="input_box 3" />
</td>

<td>
<input type="text" class="input_box 4" />
</td>

<td>
<input type="text" class="input_box 5" />
</td>

<td>
<input type="text" class="input_box 6" />
</td>

<td>
<input type="text" class="input_box 7" />
</td>

<td>
<input type="text" class="input_box total" readonly />
</td>

<td>
<div class="add_minus">
<span class="material-symbols-outlined addMinusIcon" onClick="addRow2(this)">
  add
</span>
<span class="material-symbols-outlined addMinusIcon" onClick="deleteRow2(this)">
  remove
</span>
</div>
</td>

`;
var tr_content3 = `
<td>
<select class="form-select">
  <option value="0">Project</option>
  <option value="1">BAU_006 L & D</option>
  <option value="2">BAU_007 L & D</option>
  <option value="3">BAU_008 L & D</option>
</select>
</td>
<td>
<select class="form-select">
  <option value="1">Public Holiday</option>
</select>
</td>
<td>
<input type="text" id="comment" />
</td>

<td>
<input type="text" class="input_box 1" />
</td>

<td>
<input type="text" class="input_box 2" />
</td>

<td>
<input type="text" class="input_box 3" />
</td>

<td>
<input type="text" class="input_box 4" />
</td>

<td>
<input type="text" class="input_box 5" />
</td>

<td>
<input type="text" class="input_box 6" />
</td>

<td>
<input type="text" class="input_box 7" />
</td>

<td>
<input type="text" class="input_box total" readonly/>
</td>

<td>
<div class="add_minus">
<span class="material-symbols-outlined addMinusIcon" onClick="addRow3(this)">
  add
</span>
<span class="material-symbols-outlined addMinusIcon" onClick="deleteRow3(this)">
  remove
</span>
</div>
</td>

`;
function addRow(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var bauRowspan = +bauid.getAttribute("rowspan");
  bauid.setAttribute("rowspan", bauRowspan + 1);
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
}
function addRow2(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var salesRowspan = +salesid.getAttribute("rowspan");
  salesid.setAttribute("rowspan", salesRowspan + 1);
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content2;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
}
function addRow3(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var internalRowspan = +internalid.getAttribute("rowspan");
  internalid.setAttribute("rowspan", internalRowspan + 1);
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content3;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
}
function deleteRow(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var bauRowspan = +bauid.getAttribute("rowspan");
  bauid.setAttribute("rowspan", bauRowspan - 1);
  my_table.deleteRow(newIndex);
  // onDeleteColumn(e, newIndex);
}
function deleteRow2(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var salesRowspan = +salesid.getAttribute("rowspan");
  salesid.setAttribute("rowspan", salesRowspan - 1);
  my_table.deleteRow(newIndex);
}
function deleteRow3(e) {
  var newRow = e.closest("tr");
  var newIndex = newRow.rowIndex;
  var internalRowspan = +internalid.getAttribute("rowspan");
  internalid.setAttribute("rowspan", internalRowspan - 1);
  my_table.deleteRow(newIndex);
}
plus1.onclick = (e) => {
  var newRowFind = e.target.closest("tr");
  var bauRowspan = +bauid.getAttribute("rowspan");
  bauid.setAttribute("rowspan", bauRowspan + 1);
  var newIndex = newRowFind.rowIndex;
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
};
var inc2 = 1;
plus2.onclick = () => {
  var newRowFind = plus2.closest("tr");
  var salesRowspan = +salesid.getAttribute("rowspan");
  salesid.setAttribute("rowspan", salesRowspan + 1);
  var newIndex = newRowFind.rowIndex;
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content2;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
};
plus3.onclick = () => {
  var newRowFind = plus3.closest("tr");
  var internalRowspan = +internalid.getAttribute("rowspan");
  internalid.setAttribute("rowspan", internalRowspan + 1);
  var newIndex = newRowFind.rowIndex;
  var newRow = my_table.insertRow(newIndex + 1);
  newRow.innerHTML = tr_content3;
  var inputValue = newRow.querySelectorAll(".input_box");
  inputValue.forEach((e) => {
    e.onchange = () => {
      onChangeFunction(e);
      onChangeColumn(e, 1);
    };
  });
};

// deleteIcon.onclick = (e) => {
//   console.log(e);
// };
// var resize = () => {
//   if (window.innerWidth <= 922) {
//     console.log("heool");
//     menu3.style.backgroundColor = "red";
//   } else {
//     menu3.style.backgroundColor = "green";
//   }
// };

// resize();
// window.addEventListener("resize", resize);
