const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors()); // добавление Acces control allow origin *

app.use(express.json());

app.use("/img", express.static("./img"));

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      menuList: [
        {
          id: 1,
          name: "Устрицы по рокфеллеровски",
          description:
            "Устрицы считаются довольно дорогим и редким деликатесом.",
          price: "2 700",
          dishWeight: "500",
          pictureUrl:
            "https://restaurant-small-api.herokuapp.com/img/Ustritsy id-1.jpg",
        },
        {
          id: 2,
          name: "Свиные ребрышки на гриле с зеленью",
          description:
            "Просто невозможно остаться равнодушным к ароматным свиным ребрышкам на мангале с румяной корочкой.",
          price: "1 600",
          dishWeight: "750",
        },
        {
          id: 3,
          name: "Креветки по-королевски в лимонном соке",
          description: "Креветки с лимоном — классическое сочетание.",
          price: "1 820",
          dishWeight: "7",
        },
        {
          id: 4,
          name: "Фокачча тонкая с розмарином",
          description:
            "Тонкое хрустящее тесто с ароматом розмарина подчеркнет вкус вашего блюда и всем придется по душе.",
          price: "1 700",
          dishWeight: "500",
        },
        {
          id: 5,
          name: "Пряный люля-кебаб из баранины на мангале с мятным соусом",
          description:
            "Фарш из баранины в сочетании с пряными специями и легким ароматом дымка никого не оставит равнодушным. А аппетитный мятный соус из натурального йогурта дополняет и подчеркивает вкус люля-кебаба.",
          price: "2 200",
          dishWeight: "200",
        },
        {
          id: 6,
          name: "Салат свекольный с фетой",
          description: "Гранатом, руколой и медово-горчичной заправкой.",
          price: "820",
          dishWeight: "150",
        },
        {
          id: 7,
          name: "Шарлотка с рисовой мукой",
          description:
            "Шарлотка с рисовой мукой пригодится осенью, когда вкусной ароматной выпечкой хочется себя порадовать даже тем, кто на диете.",
          price: "1 100",
          dishWeight: "300",
        },
        {
          id: 8,
          name: "Зеленый суп из латука",
          description:
            "Этот суп напоминает лето — он яркий, невесомый и подходит тем, кто думает о здоровом питании.",
          price: "1 100",
          dishWeight: "400",
        },
      ],
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
