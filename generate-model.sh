sequelize db:create

sequelize model:generate --name Category \
    --attributes category:text \
    --underscored

sequelize model:generate --name Movie \
    --attributes category_id:integer,title:text,description:text \
    --underscored

sequelize model:generate --name Cast \
    --attributes name:text,description:text,birth_date:date,died_date:date \
    --underscored

sequelize model:generate --name MovieCast \
    --attributes movie_id:integer,cast_id:integer \
    --underscored
