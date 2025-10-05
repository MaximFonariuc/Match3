# Интеграция и сборка проекта с Unity Playworks

Данный документ описывает процесс настройки и сборки проекта в Unity с использованием плагина **Unity Playworks**.  
Все иллюстрации находятся в папке [`Screenshots`](./Screenshots) и пронумерованы в порядке выполнения шагов.

---

## 1. Открытие проекта

1. Запусти **Unity Hub**.  
2. Выбери проект и укажи корректную версию редактора (например, `2022.3.62f2 LTS`).  
3. Нажми **Open with 2022.3.62f2**.  
   ![Open Project](./Screenshots/1.OpenProject.png)

---

## 2. Открытие основной сцены

1. В Unity открой вкладку **Project → Assets → Scenes**.  
2. Дважды кликни по сцене `GameScene`.  
   ![Open Scene](./Screenshots/2.OpenScene.png)

---

## 3. Вход в Unity Playworks

1. Открой меню **Playworks → Open Playable Plugin**.  
2. В появившемся окне войди под своей учетной записью Unity Playworks.  
   ![Login](./Screenshots/3.LogIn.png)

### 3.1 Попробуй открыть уже собранный билд или собери свежий (см. пункты 4-5)
   ![Try Open Build](./Screenshots/3.1.TryOpenBuild.png)
---

## 4. Настройка проекта перед сборкой

### 4.1 Проверка сцен
Убедись, что активны нужные сцены в разделе **Настройки → Основные**.  
Отметь `GameScenePortrait` и `WinScenePortrait`.  
   ![Check Main Settings](./Screenshots/4.1.CheckMainSettings.png)

### 4.2 Компиляция кода
Открой вкладку **Код → Исключения** и нажми **Скомпилировать решение**.  
   ![Compile Code](./Screenshots/4.2.CompileCode.png)

### 4.3 Сборка Develop
Перейди в **Собрать и загрузить → Сборка**, затем нажми **Собрать Develop**.  
   ![Build New Develop](./Screenshots/4.3.BuildNewDevelop.png)

---

## 5. Проверка сборки

### 5.2 Открой новый билд
   ![Open New Build](./Screenshots/5.2.OpenNewBuild.png)

### 5.3 Проверь работу в браузере
   ![Browser Checking](./Screenshots/5.3.BrowserChecking.png)

### 5.4 Заверши тестовые задачи
   ![Try Complete Tasks](./Screenshots/5.4.TryCompleteTasks.png)

### 5.5 Проверь экран победы
   ![Win Screen](./Screenshots/5.5.WinScreen.png)

---

## 6. Работа с Unity Playworks Editor

### 6.1 Загрузка плагина
   ![Loading For Playworks](./Screenshots/6.1.LoadingForPlayworks.png)

### 6.2 Открытие Playworks Editor
   ![Open Playworks](./Screenshots/6.2.OpenPlayWorks.png)

### 6.3 Открытие проекта в Playworks
   ![Open Project](./Screenshots/6.3.OpenProject.png)

### 6.4 Создание и редактирование креатива
   ![Open Creative](./Screenshots/6.4.1.OpenCreative.png)

В окне **Unity Playworks** можно:
- Добавлять секции (`Preloader`, `Endcard` и т. д.)
- Настраивать события (`Click on CTA`, `End of game`, `First Interaction`)
- Просматривать предпросмотр на устройствах.

   ![Checking Work in Playworks](./Screenshots/6.5.CheckingWorkInPlayworks.png)

---

## 7. Подготовка и загрузка ZIP

1. Сохрани билд и упакуй его в `.zip`.  
   ![Upload ZIP](./Screenshots/7.UploadZIP.png)
2. Добавь временный ZIP в Playworks.  
   ![Add Temp ZIP Build](./Screenshots/7.1.AddTempZIPBuild.png)
3. Создай новый концепт.  
   ![Create Concept](./Screenshots/7.2.CreateConcept.png)
4. Проверь концепт перед публикацией.  
   ![Check Out New Zip Concept](./Screenshots/7.3.CheckOutNewZipConcept.png)

---

## 8. Использование готового креатива

Открой созданный креатив и протестируй его в Playworks Dashboard.  
   ![Use In Work](./Screenshots/8.UseInWork.png)

---

## Примечания

- Используемая версия плагина: **Unity Playworks Plugin 6.4.0**  
- Для корректной работы требуется Unity **2022.3 LTS** или выше.  
- Все пути и имена сцен должны совпадать с настройками сборки Playworks.  
- Перед загрузкой убедись, что билд проходит диагностику без критических ошибок.

---
