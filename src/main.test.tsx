import { expect, test } from "vitest";
import { add } from './main.bs.mjs'

test("main", () => {
    expect(add(1,2)).toEqual(3)
})