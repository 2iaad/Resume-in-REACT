# Instructions

<!-- Write your instructions and context here. These will be followed in every conversation. -->

## Copilot Instruction: Change Documentation Policy

Whenever you implement a new feature, bug fix, or modification, you must update the file X.md to document the change.

Follow these rules strictly:

1. After every change you make

 - Update Documentation.md.

 - Add a new entry describing the change.

2. Each entry must include a table with the following columns:

File	| Type of Change |	Reason
path/to/file.ts |	Modified / Created / Deleted |	Explanation of why this change was required

3. Documentation requirements

 -  Every file you modify must appear in the table.
 -  The reason column must explain why the change was necessary, not just what changed.
 -  Use concise but precise explanations.

4. Revision rule

If the user later modifies code that you previously changed, you must:

 - Re-check X.md
 - Update the existing table entry if the change reason is no longer accurate.
 - Add additional rows if new files were modified.
5. Consistency rule

 -  Never leave X.md outdated.
 -  The table must always reflect the current state of the codebase.

6. Formatting

Group entries by change session using headings:

| File | Type of Change | Reason |
|-----|-----|-----|
| src/app.ts | Modified | Added validation for user input |
| src/utils.ts | Created | Utility function used by app.ts |

7. Workflow

 - Implement change
 - Review modified files
 - Update X.md
 - Verify the documentation matches the code changes