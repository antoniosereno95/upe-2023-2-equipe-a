-- CreateTable
CREATE TABLE "Prova" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Prova_titulo_key" ON "Prova"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "Prova_data_key" ON "Prova"("data");
