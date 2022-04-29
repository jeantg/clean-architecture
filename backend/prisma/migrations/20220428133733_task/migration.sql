-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stateValue" TEXT NOT NULL,
    CONSTRAINT "Task_stateValue_fkey" FOREIGN KEY ("stateValue") REFERENCES "State" ("value") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "State" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");
