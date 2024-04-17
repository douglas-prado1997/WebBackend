const connection = require('./connection');

const createPost = async (post) => {
    const { name, description, ingredients, value, image, id_responsible } = post;

    try {
        const query = `
            INSERT INTO post (name, description, ingredients, value, image, id_responsible)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        const [result] = await connection.execute(query, [name, description, ingredients, value, image, id_responsible]);

        if (result.affectedRows === 1) {
            return { success: true, postId: result.insertId };
        } else {
            return { success: false, error: "Falha ao inserir post." };
        }
    } catch (error) {
        return { success: false, error: "Erro ao inserir post. Por favor, tente novamente mais tarde." };
    }
};

const getPost = async () => {
    const [post] = await connection.execute(
        "SELECT p.id,p.name, description, CONVERT(image USING utf8) AS image, " +
        "value, u.name as responsible,count_like  FROM post p " + 
        "INNER JOIN users u ON (u.id = p.id_responsible);"
      );
      
    return post || []
};

const likePost = async (like) => {
    const { id_post, id_user } = like;

    try {
        const query = `
            INSERT INTO like_post (id_post, id_responsible)
            VALUES (?,?)
        `;
        
        const [result] = await connection.execute(query, [id_post, id_user]);

        if (result.affectedRows === 1) {
            await connection.execute('update post set count_like = count_like + 1 where id =?',[id_post])
            return { success: true, postId: result.insertId };
        } else {
            return { success: false, error: "Falha ao inserir post." };
        }
    } catch (error) {
        console.error("Erro ao inserir like:", error);
        return { success: false, error: "Erro ao inserir post. Por favor, tente novamente mais tarde." };
    }
};

const comment = async (comment_post) => {
    const { id_post, id_user,comment } = comment_post;

    try {
        const query = `
            INSERT INTO comment (id_post, id_responsible, comment)
            VALUES (?, ?, ?)
        `;
        
        const [result] = await connection.execute(query, [id_post, id_user, comment]);

        if (result.affectedRows === 1) {
            return { success: true, postId: result.insertId };
        } else {
            return { success: false, error: "Falha ao inserir post." };
        }
    } catch (error) {
        console.error("Erro ao inserir post:", error);
        return { success: false, error: "Erro ao inserir post. Por favor, tente novamente mais tarde." };
    }
};

const getComment = async () => {
    const [comment] = await connection.execute(
        "SELECT p.id,p.name, CONVERT(image USING utf8) AS image, " +
        "u.name as responsible,c.comment  FROM post p " + 
        "INNER JOIN comment c ON (c.id_post = p.id)" +
        "INNER JOIN users u ON (u.id = c.id_responsible);"
      );

      console.log(comment)
      
    return comment || []
};

module.exports = {
    createPost,
    getPost,
    likePost,
    comment,
    getComment
};
