//Variables

const btnsEdit = document.querySelectorAll(".btn_edit");
const btnsDelete = document.querySelectorAll(".btn_delete");

const edit = btnsEdit => { 
    btnsEdit.forEach(btnEdit => {
        btnEdit.addEventListener("click", e => {
            const container = e.target.parentElement.parentElement.children;

            btnEdit.textContent = btnEdit.textContent === "save" ? "edit" : "save";

            if(btnEdit.textContent === "save") {
                container[1].setAttribute("contenteditable", "");
                container[2].setAttribute("contenteditable", "");
                container[3].setAttribute("contenteditable", "");
            }else{  
                container[1].removeAttribute("contenteditable");
                container[2].removeAttribute("contenteditable");
                container[3].removeAttribute("contenteditable");
            };
        });
    });
}

const deleteBelever = btnsDelete => {
    btnsDelete.forEach(btnDelete => {
        btnDelete.addEventListener("click", () => {
            const res = confirm("Está a punto de eliminar un creyente, \n¿Desea continuar?");

            if(res) btnDelete.parentElement.parentElement.remove();
            

        })
    })
}

deleteBelever(btnsDelete)
edit(btnsEdit);