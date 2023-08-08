const posts = [];
let postIndex = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    console.log(title, category, resume, date, author)

    if (title && category && resume && author && date) {
        if (postIndex == -1) {
            storePost(title, category, resume, author, date);
            cleanFields()
            showPosts()
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                author,
                date
            }
        }
        cleanFields();
        showPosts();
        postIndex = -1;
      } else {
        alert("Preencha todos os campos")
    }
}

function cleanFields() {
    const title = document.getElementById("title").value = "";
    const category = document.getElementById("category").value = "";
    const resume = document.getElementById("resume").value = "";
    const author = document.getElementById("author").value = "";
    const date = document.getElementById("date").value = "";
}


function storePost(title, category, resume, author, date){
const post = {
    title,
    category,
    resume,
    author,
    date

};

    posts.push(post);
}


function showPosts() {
    document.getElementById("list").classList.remove("hidden");
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
            <h2>${post.title}</h2>
            <p><b>Categoria: </b>${post.category}</p>
            <p><b>Resumo: </b>${post.resume}</p>
            <p><b>Autor: </b>${post.author}</p>
            <p><b>Data de publicação: </b>${post.date}</p>

            <button onclick="editPost(${index})">Editar</button>
            <button onclick="deletePost(${index})">Excluir</button>
        </div>
        `;
    });

    document.getElementById("list").innerHTML = showContent;
}

function editPost(index) {
    const post = posts[index];
    document.getElementByIdi("title").value = post.title;
    document.getElementByIdi("category").value = post.category;
    document.getElementByIdi("resume").value = post.resume;
    document.getElementByIdi("author").value = post.author;
    document.getElementByIdi("date").value = post.date;

    postIndex = index;

}

function removePost(index) {
    posts.splice(index, 1);
    showPosts();

    if (posts.length == 0) {
        document.getElementById(list).classList.add("hidden");
    }
}