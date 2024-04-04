# Documentations

[All Documentations](https://developer.arm.com/docs)

[Processors](https://developer.arm.com/Processors)

[Common Tasks ( Start your project with our common tasks for developing software. )](https://developer.arm.com/develop-software)

[Education Media Accelerating Learning](https://www.arm.com/resources/education/books)

[Arm Glossary](https://developer.arm.com/support/arm-glossary)

[M-Profile Architecture Specifications](https://developer.arm.com/architectures/cpu-architecture/m-profile/docs)

[Arm® Architecture Reference Manual Armv8, for Armv8-A architecture profile](../res-2/DDI0487E_a_armv8_arm.pdf)

## Cortex M

[ARM® Cortex®-M3 Processor Technical Reference Manual](../res-3/Cortex-M3%20Technical%20Reference%20Manual.pdf)

[Cortex™-M3 Devices Generic User Guide](../res-0/Cortex-M3%20Generic%20User%20Guide.pdf)

[Arm® Cortex®-M4 Processor Technical Reference Manual](../res-6/Cortex-M4-Technical-Reference-Manual.pdf)

[Cortex™-M4 Devices Generic User Guide](../res-6/Cortex-M4-Generic-User-Guide.pdf)

[ARM®v7-M Architecture Reference Manual](../res-3/ARM®%20v7-M%20Architecture%20Reference%20Manual.pdf)

[Arm®v8-M Architecture Reference Manual](../res-1/DDI0553B_j_armv8m_arm.pdf)

[Arm® Cortex®-M System Design Kit Technical Reference Manual](../res-3/DDI0479D_m_class_processor_system_r1p1_trm.pdf)

## Programming

[Compiling C and C++ code for Arm](https://developer.arm.com/common-tasks/compiling-c-code-for-arm)

[Application Binary Interface for the Arm® Architecture - The Base Standard](https://developer.arm.com/docs/ihi0036/c/application-binary-interface-for-the-arm-architecture-the-base-standard-abi-2018q4-documentation)

[The Arm® C and C++ Libraries](https://developer.arm.com/docs/100073/0613/the-arm-c-and-c-libraries)

[C Library ABI for the Arm® Architecture](https://developer.arm.com/docs/ihi0039/e/library-abi-for-the-arm-architecture-abi-2018q4-documentation)

[C and C++ runtime libraries](https://developer.arm.com/docs/100073/0613/the-arm-c-and-c-libraries/c-and-c-runtime-libraries)

[NewLIB](https://sourceware.org/newlib/)

[Pre-built GNU toolchain for Arm Cortex-M and Cortex-R processors](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm)

[Anatomy of Cross-Compilation Toolchains](https://www.youtube.com/watch?v=Pbt330zuNPc)

[ARM Development with GCC and Make (1)](https://www.youtube.com/watch?v=BXYiXkwog4Q)

[A32/T32 Instruction Set ( local )](../res-0/ISA_AArch32_xml_v86A-2019-12.pdf)

[Arm® A32/T32 Base Instructions ](https://developer.arm.com/docs/ddi0597/f/base-instructions-alphabetic-order)

[Writing Arm assembly code](https://developer.arm.com/common-tasks/writing-arm-assembly-code)

[Writing ARM Assembly Language](http://www.keil.com/support/man/docs/armasm/armasm_dom1359731144635.htm)

["Hello World" in Assembly](https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/hello-world-in-assembly?_ga=2.151577977.1901940325.1580837726-548353032.1577482154)

## Debug ( CoreSight )

[Debugging your software](https://developer.arm.com/common-tasks/debugging-your-software)

[CoreSight Debug and Trace](https://developer.arm.com/ip-products/system-ip/coresight-debug-and-trace)

[CoreSight Technical Introduction](../res-3/coresight_technical_introduction_EPM_039795.pdf)

[CoreSight Architecture](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture)

[Arm® Debug Interface Architecture Specification v5](../res-3/ARM-Debug-Interface-Architecture-Specification-ADIv5_0-to-ADIv5_2.pdf)

# toolchain

[Arm GNU Toolchain Downloads](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/downloads)

**ATTENTION:** `arm-none-eabi-gdb 11.2-2022.02` needs Python2.7 (**32 bits version!**) installed and `python` added to `PATH`!

# CMSIS

Cortex Microcontroller Software Interface Standard

[Official Site](https://developer.arm.com/tools-and-software/embedded/cmsis)

[CMSIS Packs](https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs)

[Github](https://github.com/ARM-software/CMSIS_5)

# SoC Design

[System-on-Chip Design with Arm® Cortex®-M Processors](../res-3/System-on-Chip%20Design%20with%20Arm®%20Cortex®-M%20Processors.pdf)

# Note: ARM v7-M Architecture Reference Manual

|       |                                             |
| ----- | ------------------------------------------- |
| PA    | Physical Address                            |
| MVA   | Modified Virtual Address                    |
| VM    | Virtual Address                             |
| BE    | Big Endian                                  |
| LE    | Little Endian                               |
| RAZ   | Read-As-Zero                                |
| SBZP  | Should-Be-Zero-or-Preserved                 |
| AAPCS | ARM Architecture Procedure Calling Standard |

## Chapter A2 Application Level Programmers’ Model

### A2.2 ARM processor data types and arithmetic

#### A2.2.1 Integer arithmetic

##### Shift and rotate operations

The following types of shift and rotate operations are used in instructions:

-   **Logical Shift Left**

    (`LSL`) moves each bit of a bitstring left by a specified number of bits. Zeros are shifted in at the right end of the bitstring. Bits that are shifted off the left end of the bitstring are discarded, except that the last such bit can be produced as a carry output.

-   **Logical Shift Right**

    (`LSR`) moves each bit of a bitstring right by a specified number of bits. Zeros are shifted in at the left end of the bitstring. Bits that are shifted off the right end of the bitstring are discarded, except that the last such bit can be produced as a carry output.

-   **Arithmetic Shift Right**

    (`ASR`) moves each bit of a bitstring right by a specified number of bits. Copies of the leftmost bit are shifted in at the left end of the bitstring. Bits that are shifted off the right end of the bitstring are discarded, except that the last such bit can be produced as a carry output.

-   **Rotate Right**

    (`ROR`) moves each bit of a bitstring right by a specified number of bits. Each bit that is shifted off the right end of the bitstring is re-introduced at the left end. The last bit shifted off the right end of the bitstring can be produced as a carry output.

-   **Rotate Right with Extend**

    (`RRX`) moves each bit of a bitstring right by one bit. The carry input is shifted in at the left end of the bitstring. The bit shifted off the right end of the bitstring can be produced as a carry output.

##### Pseudocode details of addition and subtraction

```
// AddWithCarry()
// ==============
(bits(N), bit, bit) AddWithCarry(bits(N) x, bits(N) y, bit carry_in)
    unsigned_sum = UInt(x) + UInt(y) + UInt(carry_in);
    signed_sum   = SInt(x) + SInt(y) + UInt(carry_in);
    result       = unsigned_sum<N-1:0>; // same value as signed_sum<N-1:0>
    carry_out    = if UInt(result) == unsigned_sum then ‘0’ else ‘1’;
    overflow     = if SInt(result) == signed_sum then ‘0’ else ‘1’;
    return (result, carry_out, overflow);
```

An important property of the `AddWithCarry()` function is that if:

```
(result, carry_out, overflow) = AddWithCarry(x, NOT(y), carry_in)
```

then:

-   If `carry_in == '1'`, then `result == x-y` with `overflow == '1'` if signed overflow occurred during the subtraction and `carry_out == '1'` if unsigned borrow did not occur during the subtraction (that is, if `x >= y`).
-   If `carry_in == '0'`, then `result == x-y-1` with `overflow == '1'` if signed overflow occurred during the subtraction and `carry_out == '1'` if unsigned borrow did not occur during the subtraction (that is, if `x > y`).

Together, these mean that the `carry_in` and `carry_out` bits in `AddWithCarry()` calls can act as _NOT borrow_ flags for subtractions as well as _carry_ flags for additions.

##### Pseudocode details of saturation

Some instructions perform saturating arithmetic, that is, if the result of the arithmetic overflows the destination signed or unsigned N-bit integer range, the result produced is the largest or smallest value in that range, rather than wrapping around modulo 2<sup>N</sup>. This is supported in pseudocode by the `SignedSatQ()` and `UnsignedSatQ()` functions when a boolean result is wanted saying whether saturation occurred, and by the `SignedSat()` and `UnsignedSat()` functions when only the saturated result is wanted:

```
// SignedSatQ()
// ============
(bits(N), boolean) SignedSatQ(integer i, integer N)
    if i > 2^(N-1) - 1 then
        result = 2^(N-1) - 1; saturated = TRUE;
    elsif i < -(2^(N-1)) then
        result = -(2^(N-1)); saturated = TRUE;
    else
        result = i; saturated = FALSE;
        return (result<N-1:0>, saturated);
```

```
// UnsignedSatQ()
// ==============
(bits(N), boolean) UnsignedSatQ(integer i, integer N)
    if i > 2^N - 1 then
        result = 2^N - 1; saturated = TRUE;
    elsif i < 0 then
        result = 0; saturated = TRUE;
    else
        result = i; saturated = FALSE;
        return (result<N-1:0>, saturated)
```

```
// SignedSat()
// ===========
bits(N) SignedSat(integer i, integer N)
    (result, -) = SignedSatQ(i, N);
    return result
```

```
// UnsignedSat()
// =============
bits(N) UnsignedSat(integer i, integer N)
    (result, -) = UnsignedSatQ(i, N);
    return result;
```

`SatQ(i, N, unsigned)` returns either `UnsignedSatQ(i, N)` or `SignedSatQ(i, N)` depending on the value of its third argument, and `Sat(i, N, unsigned)` returns either `UnsignedSat(i, N)` or `SignedSat(i, N)` depending on the value of its third argument:

```
// SatQ()
// ======
(bits(N), boolean) SatQ(integer i, integer N, boolean unsigned)
    (result, sat) = if unsigned then UnsignedSatQ(i, N) else SignedSatQ(i, N);
    return (result, sat);
```

```
// Sat()
// =====
bits(N) Sat(integer i, integer N, boolean unsigned)
    result = if unsigned then UnsignedSat(i, N) else SignedSat(i, N);
    return result;
```

### A2.3 Registers and Execution state

#### A2.3.1 ARM core registers

There are thirteen general-purpose 32-bit registers, R0-R12, and an additional three 32-bit registers that have special names and usage models.

-   **SP**

    Stack pointer, used as a pointer to the active stack. This is preset to the top of the Main stack on reset.

-   **LR**

    Link register, used to store the Return Link. This is a value that relates to the return address from a subroutine that is entered using a Branch with Link instruction. A reset sets this register to 0xFFFFFFFF. The reset value causes a fault condition if the processor uses it when attempting a subroutine return. The LR is also updated on exception entry. LR is sometimes referred to as R14.

    LR can be used for other purposes when it is not required to support a return from a subroutine.

-   **PC**

    Program counter. The PC is loaded with the reset handler start address on reset. PC is sometimes referred to as R15.

##### Pseudocode details of ARM core register operations

In pseudocode, the `R[]` function is used to:

-   Read or write R0-R12, SP, and LR, using `n` == 0-12, 13, and 14 respectively.
-   Read the PC, using `n` == 15.

This function has prototypes:

```
bits(32) R[integer n]
    assert n >= 0 && n <= 15;
```

```
R[integer n] = bits(32) value
    assert n >= 0 && n <= 14;
```

Writing an address to the PC causes either a simple branch to that address or an _interworking_ branch that, in ARMv7-M, must select the Thumb instruction set to execute after the branch.

The `BranchWritePC()` function performs a simple branch:

```
// BranchWritePC()
// ===============

BranchWritePC(bits(32) address)
    BranchTo(address<31:1>:’0’);
```

The `BXWritePC()` and `BLXWritePC()` functions each perform an interworking branch:

```
// BXWritePC()
// ===========
BXWritePC(bits(32) address)
    if CurrentMode == Mode_Handler && address<31:28> == ‘1111’ then
        ExceptionReturn(address<27:0>);
    else
        EPSR.T = address<0>; // if EPSR.T == 0, a UsageFault(‘Invalid State’)
                             // is taken on the next instruction
        BranchTo(address<31:1>:’0’)
```

```
// BLXWritePC()
// ============
BLXWritePC(bits(32) address)
    EPSR.T = address<0>; // if EPSR.T == 0, a UsageFault(‘Invalid State’)
                         // is taken on the next instruction
    BranchTo(address<31:1>:’0’);
```

The `LoadWritePC()` and `ALUWritePC()` functions are used for two cases where the behavior was systematically modified between architecture versions. The functions simplify to aliases of the branch functions in the M-profile architecture variants:

```
// LoadWritePC()
// =============
LoadWritePC(bits(32) address)
    BXWritePC(address);
```

```
// ALUWritePC()
// ============
ALUWritePC(bits(32) address)
    BranchWritePC(address);
```

#### A2.3.2 The Application Program Status Register (APSR)

Program status is reported in the 32-bit _Application Program Status Register_ (APSR). The APSR bit assignments are:

![](../res-1/snipping-20221209153653.png)

APSR bit fields are in the following categories:

-   Reserved bits are allocated to system features or are available for future expansion.
-   Flags that can be updated by many instructions:

    -   **N, bit[31]**

        Negative condition flag. Set to bit[31] of the result of the instruction. If the result is regarded as a two's complement signed integer, then N == 1 if the result is negative and N == 0 if it is positive or zero.

    -   **Z, bit[30]**

        Zero condition flag. Set to 1 if the result of the instruction is zero, and to 0 otherwise. A result of zero often indicates an equal result from a comparison.

    -   **C, bit[29]**

        Carry condition flag. Set to 1 if the instruction results in a carry condition, for example an unsigned overflow on an addition.

    -   **V, bit[28]**

        Overflow condition flag. Set to 1 if the instruction results in an overflow condition, for example a signed overflow on an addition.

    -   **Q, bit[27]**

        Set to 1 if a `SSAT` or `USAT` instruction changes the input value for the signed or unsigned range of the result. In a processor that implements the DSP extension, the processor sets this bit to 1 to indicate an overflow on some multiplies. Setting this bit to 1 is called saturation.

    -   **GE[3:0], bits[19:16], DSP extension only**

        Greater than or Equal flags. SIMD instructions update these flags to indicate the results from individual bytes or halfwords of the operation. . Software can use these flags to control a later `SEL` instruction.

#### A2.3.3 Execution state support

ARMv7-M only executes Thumb instructions, and therefore always executes instructions in Thumb state.

### A2.4 Exceptions, faults and interrupts

#### A2.4.1 System-related events

The following types of exception are system-related. Where there is direct correlation with an instruction, reference to the associated instruction is made.

Supervisor Calls are used by application code to request a service from the underlying operating system. Using the SVC instruction, the application can instigate a Supervisor Call for a service requiring privileged access to the system.

Several forms of Fault can occur:

-   Instruction execution related errors
-   Data memory access errors can occur on any load or store.
-   Usage faults from a variety of Execution state related errors. Attempting to execute an undefined instruction is an example cause of a UsageFault exception.
-   Debug events can generate a DebugMonitor exception.

Faults in general are synchronous with respect to the associated executing instruction. Some system errors can cause an imprecise exception where it is reported at a time bearing no fixed relationship to the instruction that caused it.

The processor always treats interrupts as asynchronous to the program flow.

An ARMv7-M implementation includes:

-   A system timer, SysTick, and associated interrupt.
-   A deferred Supervisor Call, PendSV.
-   A controller for external interrupts.
-   A `BKPT` instruction, that generates a debug event.

For power or performance reasons, software might want to notify the system that an action is complete, or provide a hint to the system that it can suspend operation of the current task. The ARMv7-M architecture provides instruction support for the following:

-   Send Event and Wait for Event instructions.
-   A Wait For Interrupt instruction.

## Chapter A3 ARM Architecture Memory Model

### A3.1 Address space

The ARMv7-M architecture uses a single, flat address space of 2<sup>32</sup> 8-bit bytes. Byte addresses are treated as unsigned numbers, running from 0 to 2<sup>32</sup> - 1.

This address space is regarded as consisting of 2<sup>30</sup> 32-bit words, each of whose addresses is word-aligned, meaning that the address is divisible by 4. The address space can also be considered as consisting of 2<sup>31</sup> 16-bit halfwords, each of whose addresses is halfword-aligned, meaning that the address is divisible by 2.

While instruction fetches are always halfword-aligned, some load and store instructions support unaligned addresses.

Address calculations are normally performed using ordinary integer instructions. This means that they normally wrap around if they overflow or underflow the address space. Another way of describing this is that any address calculation is reduced modulo 2<sup>32</sup>.

Normal sequential execution of instructions effectively calculates:

```
(address_of_current_instruction) + (2 or 4) /*16- and 32-bit instr mix*/
```

after each instruction to determine which instruction to execute next. If this calculation overflows the top of the address space, the result is UNPREDICTABLE. In ARMv7-M this condition cannot occur because the top of memory is defined to always have the Execute Never (XN) memory attribute associated with it.

The above only applies to instructions that are executed, including those that fail their condition code check. Most ARM implementations prefetch instructions ahead of the currently-executing instruction.

All memory addresses used in ARMv7-M are _physical addresses_ (PAs). For consistency with other ARM Architecture Reference Manuals, the term _Modified Virtual Address_ (MVA) is used throughout this manual, even though ARMv7-M has no concept of _virtual addresses_ (VAs). For the ARMv7-M architecture profile in all cases the MVA, VA, and PA have the same value

### A3.2 Alignment support

The system architecture provides two policies for alignment checking in ARMv7-M:

-   Support the unaligned accesses.
-   Generate a fault when an unaligned access occurs.

The policy varies with the type of access. An implementation can be configured to force alignment faults for all unaligned accesses.

#### A3.2.1 Alignment behavior

##### Alignment and data access

The following data accesses always generate an alignment fault:

-   Non halfword-aligned `LDREXH` and `STREXH`.
-   Non word-aligned `LDREX` and `STREX`.
-   Non word-aligned `LDRD`, `LDMIA`, `LDMDB`, `POP`, `LDC`, `VLDR`, `VLDM`, and `VPOP`.
-   Non word-aligned `STRD`, `STMIA`, `STMDB`, `PUSH`, `STC`, `VSTR`, `VSTM`, and `VPUSH`.

The following data accesses support unaligned addressing, and only generate alignment faults when the CCR.UNALIGN_TRP bit is set to 1.

-   Non halfword-aligned `LDR{S}H{T}` and `STRH{T}`.
-   Non halfword-aligned `TBH`.
-   Non word-aligned `LDR{T}` and `STR{T}`.

Accesses to Strongly Ordered and Device memory types must always be naturally aligned.

##### Control of endianness in ARMv7-M

ARMv7-M supports a selectable endian model in which, on a reset, a control input determines whether the endianness is _big endian_ (BE) or _little endian_ (LE). This endian mapping has the following restrictions:

-   The endianness setting only applies to data accesses. Instruction fetches are always little endian.
-   All accesses to the SCS are little endian.

The AIRCR.ENDIANNESS bit indicates the endianness.

##### Instruction alignment and byte ordering

Thumb instruction execution enforces 16-bit alignment on all instructions. This means that 32-bit instructions are treated as two halfwords, hw1 and hw2, with hw1 at the lower address.

In instruction encoding diagrams, hw1 is shown to the left of hw2. This results in the encoding diagrams reading more naturally. The byte order of a 32-bit Thumb instruction is shown in Figure A3-5.

![](../res-1/snipping-20221209191326.png)

##### Instructions to reverse bytes in a general-purpose register

ARMv7-M supports instructions for the following byte transformations:

-   `REV`

    Reverse word (four bytes) register, for transforming 32-bit representations.

-   `REVSH`

    Reverse halfword and sign extend, for transforming signed 16-bit representations.

-   `REV16`

    Reverse packed halfwords in a register for transforming unsigned 16-bit representations.

### A3.5 Memory types and attributes and the memory order model

ARMv7 defines a set of memory attributes with the characteristics required to support the memory and devices in the system memory map.

The ordering of accesses for regions of memory, referred to as the memory order model, is defined by the memory attributes.

#### A3.5.1 Memory types

For each memory region, the most significant memory attribute specifies the memory type. There are three mutually exclusive memory types:

-   Normal.
-   Device.
-   Strongly-ordered.

Normal and Device memory regions have additional attributes.

Usually, memory used for program code and for data storage is Normal memory. Examples of Normal memory technologies are:

-   Programmed Flash ROM.
-   ROM.
-   SRAM.
-   DRAM and DDR memory.

System peripherals (I/O) generally conform to different access rules to Normal memory. Examples of I/O accesses are:

-   FIFOs where consecutive accesses:

    -   Add queued values on write accesses.
    -   Remove queued values on read accesses.

-   Interrupt controller registers where an access can be used as an interrupt acknowledge, changing the state of the controller itself.

-   Memory controller configuration registers that are used to set up the timing and correctness of areas of Normal memory.

-   Memory-mapped peripherals, where accessing a memory location can cause side effects in the system.

In ARMv7, regions of the memory map for these accesses are defined as Device or Strongly-ordered memory. To ensure system correctness, access rules for Device and Strongly-ordered memory are more restrictive than those for Normal memory:

-   Both read and write accesses can have side effects.
-   Accesses must not be repeated, for example, on return from an exception.
-   The number, order, and sizes of the accesses must be maintained.

In addition, for Strongly-ordered memory, all memory accesses are strictly ordered to correspond to the program order of the memory access instructions.

## Chapter B1 System Level Programmers’ Model

### B1.4 Registers

The ARMv7-M profile has the following registers closely coupled to the processor:

-   General-purpose registers R0-R12.
-   Two stack pointer (SP) registers, SP_main and SP_process. These are banked versions of SP, also described as R13.
-   The Link Register, LR, also described as R14.
-   The Program Counter, PC, sometimes described as R15.
-   Status registers for flags, Execution state bits, and when handling an exception, the exception number.
-   Mask registers used in managing the prioritization scheme for exceptions and interrupts.
-   A control register, CONTROL, that identifies the current stack and Thread mode privilege level.

All other registers described in this specification are memory mapped.

#### B1.4.1 The ARM core registers

The registers R0-R12, SP, LR, and PC are named the ARM core registers. These registers can be described as R0-R15.

##### The SP registers

An ARMv7-M processor implements two stacks:

-   The Main stack, SP_main or MSP.
-   The Process stack, SP_process or PSP.

The stack pointer, SP, banks SP_main and SP_process. The current stack depends on the mode and, in Thread mode, the value of the CONTROL.SPSEL bit.

ARMv7-M implementations treat SP bits[1:0] as RAZ/WI. ARM strongly recommends that software treats SP bits[1:0] as SBZP for maximum portability across ARMv7 profiles.

#### B1.4.2 The special-purpose Program Status Registers, xPSR

The _Program Status Register_ (PSR) is a 32-bit register that comprises three subregisters:

-   **Application Program Status Register, APSR**
-   **Interrupt Program Status Register, IPSR**
-   **Execution Program Status Register, EPSR**

Software can use the `MRS` and `MSR` instructions to access the complete PSR, or any combination of one or more of the subregisters. xPSR is a generic term for a Program Status Register.

Figure B1-1 shows how the APSR, IPSR, and EPSR combine to form the PSR.

![](../res-1/snipping-20221212152322.png)

##### The APSR

Flag setting instructions modify the APSR flags N, Z, C, V, and Q, and the processor uses these flags to evaluate conditional execution in IT and conditional branch instructions.

On an implementation that includes the DSP extension, the APSR.GE bits are stacked as part of the xPSR on exception entry, and restored as part of exception return.

##### The IPSR

The processor writes to the IPSR on exception entry and exit. The IPSR Exception Number field is defined as follows:

-   In Thread mode, the value is 0.
-   In Handler mode, holds the exception number of the currently-executing exception.

On reset, the processor is in Thread mode and the Exception Number field of the IPSR is cleared to 0. As a result, the value 1, the exception number for reset, is a transitory value, that software cannot see as a valid IPSR Exception Number.

##### The EPSR

The EPSR contains the T bit, that is set to 1 to indicate that the processor executes Thumb instructions, and an overlaid ICI or IT field that supports interrupt-continue load/store instructions and the IT instruction.

The ICI/IT bits are used for saved exception-continuable instruction state or saved IT state:

-   When used as ICI bits, they provide information on the outstanding register list for an interrupted exception-continuable multicycle load or store instruction.
-   When used as IT bits, they provide context information for the conditional execution of a sequence of instructions in an IT block so that it can be interrupted and restarted at the appropriate point.

The IT feature takes precedence over the ICI feature if an exception-continuable instruction is used in an IT construct. In this situation, the multicycle load or store instruction is treated as restartable.

#### B1.4.3 The special-purpose mask registers

An ARMv7-M processor implements the following special-purpose registers for exception priority boosting:

-   **PRIMASK** The exception mask register, a 1-bit register. Setting PRIMASK to 1 raises the execution priority to 0.
-   **BASEPRI** The base priority mask, an 8-bit register. BASEPRI changes the priority level required for exception preemption. It has an effect only when BASEPRI has a lower value than the unmasked priority level of the currently executing software.

    The number of implemented bits in BASEPRI is the same as the number of implemented bits in each field of the priority registers, and BASEPRI has the same format as those fields.

    A value of zero disables masking by BASEPRI.

-   **FAULTMASK** The fault mask, a 1-bit register. Setting FAULTMASK to 1 raises the execution priority to -1. Returning from any exception except NMI clears FAULTMASK to 0.

Software can access these registers using the `MRS` and `MSR` instructions. Figure B1-2 shows the formats of MRS and MSR accesses to the mask registers.

![](../res-1/snipping-20221212153921.png)

#### B1.4.4 The special-purpose CONTROL register

The special-purpose CONTROL register is a 2-bit or 3-bit register defined as follows:

-   **nPRIV, bit[0]** \
    Defines the execution privilege in Thread mode:

    -   **0** \
        Thread mode has privileged access.
    -   **1** \
        Thread mode has unprivileged access.

-   **SPSEL, bit[1]** \
    Defines the stack to be used:

    -   **0** \
        Use SP_main as the current stack.
    -   **1** \
        In Thread mode, use SP_process as the current stack. In Handler mode, this value is reserved.

-   **FPCA, bit[2], if the processor includes the FP extension** \
    Defines whether the FP extension is active in the current context:

    -   **0** \
        FP extension not active.
    -   **1** \
        FP extension is active.

    If FPCCR.ASPEN is set to 1, enabling automatic FP state preservation, then the processor sets this bit to 1 on successful completion of any FP instruction.

A reset clears the CONTROL register to zero. Software can use the `MRS` instruction to read the register, and the `MSR` instruction to write to the register.

On an exception entry or exception return, the processor updates the SPSEL bit and, if it implements the FP extension, the FPCA bit.

Software must use an `ISB` barrier instruction to ensure a write to the `CONTROL` register takes effect before the next instruction is executed.

### B1.5 ARMv7-M exception model

#### B1.5.1 Overview of the exceptions supported

The ARMv7-M profile supports the following exceptions:

-   **Reset** \
    The ARMv7-M profile supports two levels of reset. The reset level determines which register bit fields are forced to their reset values on the deassertion of reset.

    -   A power-on reset resets the processor, System Control Space and debug logic.
    -   A Local reset resets the processor and System Control Space, except for some fault and debug related resources.

    The Reset exception is permanently enabled with a fixed priority of -3.

-   **NMI** \
    NMI (Non-Maskable Interrupt) is the highest priority exception other than reset. It is permanently enabled with a fixed priority of -2.

-   **HardFault** \
     HardFault is the generic fault that exists for all classes of fault that cannot be handled by any of the other exception mechanisms. Typically, HardFault is used for unrecoverable system failures, although this is not required and some uses of HardFault might be recoverable. HardFault is permanently enabled with a fixed priority of -1.

-   **MemManage** \
    The MemManage fault handles memory protection faults that are determined by the Memory Protection Unit or by fixed memory protection constraints, for both instruction and data memory transactions. Software can disable this fault. If it does, a MemManage fault escalates to HardFault. MemManage has a configurable priority.
-   **BusFault** \
    The BusFault fault handles memory-related faults, other than those handled by the MemManage fault, for both instruction and data memory transactions. Typically these faults arise from errors detected on the system buses. The architecture permits an implementation to report synchronous or asynchronous BusFaults according to the circumstances that trigger the exceptions. Software can disable this fault. If it does, a BusFault escalates to HardFault. BusFault has a configurable priority.
-   **UsageFault** \
    The UsageFault fault handles non-memory related faults caused by instruction execution. A number of different situations cause usage faults, including:

    -   Undefined Instruction.
    -   Invalid state on instruction execution.
    -   Error on exception return.
    -   Attempting to access a disabled or unavailable coprocessor.

    The following can cause usage faults when the processor is configured to report them:

    -   A word or halfword memory accesses to an unaligned address.
    -   Division by zero.

-   **DebugMonitor** \
    In general, a DebugMonitor exception is a synchronous exception and classified as a fault. DebugMonitor exceptions occur when Halting debug is disabled, and the DebugMonitor exception is enabled. The DebugMonitor exception has a configurable priority.

    A debug watchpoint is asynchronous and behaves as an interrupt.

-   **SVCall** \
    This Supervisor Call handles the exception caused by the SVC instruction. SVCall is permanently enabled and has a configurable priority.

-   **Interrupts** \
    The ARMv7-M profile supports two system-level interrupts, and up to 496 external interrupts. Each interrupt has a configurable priority. The system-level interrupts are:

    -   **PendSV** \
        Used for software-generated system calls.

        PendSV is permanently enabled, and is controlled using the ICSR.PENDSVSET and ICSR.PENDSVCLR bits.

    -   **SysTick** \
        Generated by the SysTick timer that is an integral component of an ARMv7-M processor. SysTick is permanently enabled, and is controlled using the ICSR.PENDSTSET and ICSR.PENDSTCLR bits.

        Software can suppress hardware generation of the SysTick event, but ICSR.PENDSTSET and ICSR.PENDSTCLR are always available to software.

#### B1.5.2 Exception number definition

| Exception number | Exception            |
| ---------------- | -------------------- |
| 1                | Reset                |
| 2                | NMI                  |
| 3                | HardFault            |
| 4                | MemManage            |
| 5                | BusFault             |
| 6                | UsageFault           |
| 7-10             | Reserved             |
| 11               | SVCall               |
| 12               | DebugMonitor         |
| 13               | Reserved             |
| 14               | PendSV               |
| 15               | SysTick              |
| 16               | External interrupt 0 |
| .                | .                    |
| .                | .                    |
| .                | .                    |
| 16+N             | External interrupt N |

#### B1.5.3 The vector table

The vector table contains the initialization value for the stack pointer, and the entry point addresses of each exception handler。

| Word offset in table | Description, for all pointer address values |
| --- | --- |
| 0 | SP_main. This is the reset value of the Main stack pointer. |
| Exception Number | Exception using that Exception Number. |

On reset, the processor initializes the vector table base address to an IMPLEMENTATION DEFINED address. Software can find the current location of the table, or relocate the table, using the VTOR。

The Vector table must be naturally aligned to a power of two whose alignment value is greater than or equal to (Number of Exceptions supported x 4), with a minimum alignment of 128 bytes. On powerup or reset, the processor uses the entry at offset 0 as the initial value for SP_main. All other entries must have bit[0] set to 1, because this bit defines the EPSR.T bit on exception entry.

#### B1.5.4 Exception priorities and preemption

In the ARMv7-M priority model, lower numbers take precedence. That is, the lower the assigned priority value, the higher the priority level. The priority order for exceptions with the same priority level is fixed, and is determined by their exception number.

Reset, NMI and HardFault execute at fixed priorities of -3, -2, and -1 respectively. Software can set the priorities of all other exceptions, using registers in the System Control Space. Software-assigned priority values start at 0, so Reset, NMI, and HardFault always have higher priorities than any other exception. A reset clears these software-configured priority settings to 0, the highest possible configurable priority.

When multiple pending exceptions have the same priority number, the exception with the lowest exception number takes precedence. When an exception is active, only an exception with a higher priority can preempt it.

If software changes the priority of an exception that is pending or active, it must synchronize this change to the instruction stream.

##### Maximum supported priority value

The number of supported priority values is an IMPLEMENTATION DEFINED power of two in the range 8 to 256, and the minimum supported priority value is always 0. All priority value fields are 8-bits, and if an implementation supports fewer than 256 priority levels then low-order bits of these fields are RAZ.

##### Priority grouping

Priority grouping splits exception priority into two parts, the group priority and the subpriority. The AIRCR.PRIGROUP field controls this split.

The group priority field defines the priority for preemption. If multiple pending exceptions have the same group priority, the exception processing logic uses the subpriority field to resolve priority within the group.

##### Execution priority and priority boosting

When no exception is active, software executing in Thread or Handler mode is, effectively, executing at a priority value of (maximum supported exception priority value +1).

The _base level of execution priority_ refers to software executing at this priority level in Thread mode.

The execution priority is defined as the highest priority determined from:

-   The base level of execution priority.
-   The highest priority of all active exceptions, including any that the current exception preempted.
-   The impact of PRIMASK, FAULTMASK, and BASEPRI values.

This definition of execution priority means that an exception handler can be executing at a priority that is higher than the priority of the corresponding exception. In particular, if a handler reduces the priority of its corresponding exception, the execution priority falls only to the priority of the highest-priority preempted exception. Therefore, reducing the priority of the current exception never permits:

-   A preempted exception to preempt the current exception handler.
-   Inversion of the priority of preempted exceptions.

##### Priority boosting

Software can use the following mechanisms to boost priority:

-   **PRIMASK** \
     Setting this mask bit to 1 raises the execution priority to 0. This prevents any exceptions with configurable priority from becoming active, except through the fault escalation mechanism.

-   **FAULTMASK** \
     Setting this mask bit to 1 raises the execution priority to -1. Any exception return except a return from NMI automatically clears FAULTMASK to 0.

-   **BASEPRI** \
     Software can write this register with a value from N, the lowest configurable priority, to 1. When this register is cleared to 0, it has no effect on the execution priority. A non-zero value, qualified by the value of the AIRCR.PRIGROUP field, acts as a priority mask. This affects the execution priority when the priority defined by BASEPRI is higher than the current executing priority.

The priority boosting mechanisms only affect the group priority. They have no effect on the subpriority. The subpriority is only used to sort pending exception priorities, and does not affect active exceptions.

##### Execution priority

The `ExecutionPriority()` pseudocode function defines the execution priority.

```
// ExecutionPriority()
// ===================
// Determine the current execution priority
integer ExecutionPriority()
    highestpri = 256; // Priority of Thread mode with no active exceptions
                      // The value is PriorityMax + 1 = 256
                      // (configurable priority maximum bit field is 8 bits)
    boostedpri = 256; // Priority influence of BASEPRI, PRIMASK and FAULTMASK

    subgroupshift = UInt(AIRCR.PRIGROUP);
    groupvalue = UInt(LSL('000000010', subgroupshift)); // Used by priority grouping

    for i = 2 to 511 // IPSR values of the exception handlers
        if ExceptionActive[i] == '1' then
            if ExceptionPriority[i] < highestpri then
                highestpri = ExceptionPriority[i];

                // Include the PRIGROUP effect
                subgroupvalue = highestpri MOD groupvalue;
                highestpri = highestpri - subgroupvalue;

    if UInt(BASEPRI<7:0>) != 0 then
        boostedpri = UInt(BASEPRI<7:0>);

        // Include the PRIGROUP effect
        subgroupvalue = boostedpri MOD groupvalue;
        boostedpri = boostedpri - subgroupvalue;

    if PRIMASK<0> == '1' then
        boostedpri = 0;

    if FAULTMASK<0> == '1' then
        boostedpri = -1

    if boostedpri < highestpri then
        priority = boostedpri;
    else
        priority = highestpri;

    return priority;
```

##### Priority escalation

When the current execution priority is less than HardFault, the processor escalates the exception priority to HardFault in the following cases:

-   When the group priority of a pending synchronous fault or Supervisor Call is lower than or equal to the currently executing priority, inhibiting normal preemption. This applies to all synchronous exceptions, both faults and SVCalls. This includes a DebugMonitor exception caused by executing a BKPT instruction, but excludes all other DebugMonitor exceptions.
-   If a disabled configurable-priority fault occurs.

Escalating the exception priority to HardFault causes the processor to take a HardFault exception

Examples of pending exceptions that cause priority escalation are:

-   The exception handler for a configurable-priority fault causes the kind of exception it is servicing. For example, if the processor tries to execute an undefined instruction in a UsageFault handler.
-   The exception handler for a configurable-priority fault generates a different fault, and the handler for that fault is the same or lower priority.
-   A configurable-priority fault that is not enabled occurs.
-   An `SVC` instruction occurs when PRIMASK is set to 1.

Note:

-   Enabled interrupts are not escalated, they are set to the Pending state.
-   Disabled interrupts are ignored.
-   Asynchronous faults are set to the Pending state and, if enabled, are entered according to normal priority rules. They are treated as HardFault exceptions when disabled. This applies to imprecise BusFaults.

##### Reset behavior

Asserting reset causes the processor to abandon the current Execution state without saving it. On the deassertion of reset, all registers that have a defined reset value contain that value, and the processor performs the actions described by the `TakeReset()` pseudocode.

```
// TakeReset()
// ============
TakeReset()
    CurrentMode = Mode_Thread;
    PRIMASK<0> = '0';                   /* priority mask cleared at reset */
    FAULTMASK<0> = '0';                 /* fault mask cleared at reset */
    BASEPRI<7:0> = Zeros(8);            /* base priority disabled at reset */
    if HaveFPExt() then                 /* initialize the Floating Point Extn */
        // ...
    else
        CONTROL<1:0> = '00';            /* current stack is Main, thread is privileged */
    for i = 0 to 511                    /* all exceptions Inactive */
        ExceptionActive[i] = '0';
    ResetSCSRegs();                     /* catch-all function for System Control Space reset */
    ClearExclusiveLocal(ProcessorID()); /* Synchronization (LDREX* / STREX*) monitor support */
    for i = 0 to 12
        R[i] = bits(32) UNKNOWN;

    bits(32) vectortable = VTOR<31:7>:'0000000';
    SP_main = MemA_with_priv[vectortable, 4, AccType_VECTABLE] AND 0xFFFFFFFC<31:0>;
    SP_process = ((bits(30) UNKNOWN):'00');
    LR = 0xFFFFFFFF<31:0>;              /* preset to an illegal exception return value */
    tmp = MemA_with_priv[vectortable+4, 4, AccType_VECTABLE];
    tbit = tmp<0>;
    APSR = bits(32) UNKNOWN;            /* flags UNPREDICTABLE from reset */
    IPSR<8:0> = Zeros(9);               /* Exception Number cleared */
    EPSR.T = tbit;                      /* T bit set from vector */
    EPSR.IT<7:0> = Zeros(8);            /* IT/ICI bits cleared */
    BranchTo(tmp AND 0xFFFFFFFE<31:0>); /* address of reset service routine */
```

`ExceptionActive[*]` is a conceptual array of active flag bits for all exceptions, meaning it has active flags for the fixed-priority system exceptions, the configurable-priority system exceptions, and the external interrupts. The active flags for the fixed-priority exceptions are conceptual only, and are not required to exist in a System register.

#### B1.5.6 Exception entry behavior

On preemption of the instruction stream, the hardware saves context state onto a stack pointed to by one of the SP registers. The stack used depends on the mode of the processor at the time of the exception.

The stacked context supports the _ARM Architecture Procedure Calling Standard_ (AAPCS). This means the exception handler can be an AAPCS-compliant procedure.

The ARMv7-M architecture uses a full-descending stack, where:

-   When pushing context, the hardware decrements the stack pointer to the end of the new stack frame before it stores data onto the stack.
-   When popping context, the hardware reads the data from the stack frame and then increments the stack pointer.

When pushing context to the stack, the hardware saves eight 32-bit words, comprising xPSR, ReturnAddress, LR (R14), R12, R3, R2, R1, and R0.

If the processor implements the Floating-point Extension, in addition to this eight word stack frame it can also either push FP state onto the stack, or reserve space on the stack for this state.

#### B1.5.7 Stack alignment on exception entry

The ARMv7-M architecture guarantees that stack pointer values are at least 4-byte aligned. However, some software standards require the stack pointer to be 8-byte aligned, and the architecture can enforce this alignment. The CCR.STKALIGN bit indicates whether, as part of an exception entry, the processor aligns the SP to 4 bytes, or to 8 bytes. It is IMPLEMENTATION DEFINED whether this bit is:

-   RW, in which case its reset value is IMPLEMENTATION DEFINED.
-   RO, in which case it is RAO, indicating 8-byte SP alignment.

ARM deprecates implementation or use of 4-byte SP alignment.

##### Operation of 8-byte stack alignment

On an exception entry when CCR.STKALIGN is set to 1, the exception entry sequence ensures that the stack pointer in use before the exception entry has 8-byte alignment, by adjusting its alignment if necessary. When the processor pushes the PSR value to the stack it uses bit[9] of the stacked PSR value to indicate whether it realigned the stack.

Figure B1-3 shows the frame of information pushed onto the stack on exception entry, and how the processor reserves an additional word on the stack, if necessary, to obtain 8-byte stack alignment.

![](../res-1/snipping-20221212184138.png)

##### Retrieving arguments from the stack

Any exception-handling code that must retrieve arguments from the stack, that were pushed to the stack before the exception was taken, must use the stacked value of f xPSR [9] to determine whether the previous top-of-stack was at offset `0x20` or `0x24`.

#### B1.5.8 Exception return behavior

An exception return occurs when the processor is in Handler mode and one of the following instructions loads a value of 0xFXXXXXXX into the PC:

-   `POP`/`LDM` that includes loading the PC.
-   `LDR` with `PC` as a destination.
-   `BX` with any register.

When used in this way, the processor intercepts the value written to the PC. This value is the EXC_RETURN value. In this value:

-   **Bits[31:28]** \
    0xF. This value identifies the value in a PC load as an EXC_RETURN value.
-   **Bits[27:5]** \
    Reserved, SBOP. The effect of writing a value other than 1 to any bit in this field is UNPREDICTABLE.
-   **Bit[4]** Reserved, SBOP if the processor does not implement the FP extension.
-   **Bits[3:0]** Define the required exception return behavior. The entry in the Return stack column is the stack that holds the information that the processor must restore as part of the exception return sequence. This is also the stack the processor will use after returning from the exception.

##### Integrity checks on exception return

The integrity checks test the following on an exception return:

-   The Exception number being returned from, as held in the IPSR at the start of the return, is listed in the SCB as being active.
-   Normally, if at least one exception other than the returning exception is active, the return must be to Handler mode.
-   On a return to Thread mode, the value restored to the IPSR Exception number field must be 0.
-   On a return to Handler mode, the value restored to the IPSR Exception number field must not be 0.
-   EXC_RETURN[3:0] must not be a reserved value.

Any failed check causes an INVPC UsageFault, with the EXC_RETURN value in the LR.

An exception return where HardFault is active and NMI is inactive always makes HardFault inactive and clears FAULTMASK.

##### Exceptions in single-word load operations

To support instruction replay, single-word load instructions must not update the destination register when a fault occurs during execution. For example, this means the following instruction can be replayed:

```
LDR R0, [R2, R0];
```

##### Exceptions in Load Multiple and Store Multiple operations

To improve interrupt response and increase processing throughput, the processor can take an interrupt during the execution of a Load Multiple or Store Multiple instruction, and continue execution of the instruction after returning from the interrupt. During the interrupt processing, the EPSR.ICI bits hold the continuation state of the Load Multiple or Store Multiple instruction.

In the base ARMv7-M architecture the exception-continuable instructions are `LDM`, `LDMDB`, `STM`, `STMDB`, `POP`, and `PUSH`. If a processor implements the FP extension the exception-continuable floating-point instructions are `VLDM`, `VSTM`, `VPOP`, and `VPUSH`.



# Note: Cortex-M4 Devices Generic User Guide

[Cortex™-M4 Devices Generic User Guide](../res-6/Cortex-M4-Generic-User-Guide.pdf)

## Chapter 2 The Cortex-M4 Processor

### 2.2 Memory model

#### 2.2.7 Synchronization primitives

A pair of synchronization primitives comprises:

-   **A Load-Exclusive instruction**

    Used to read the value of a memory location, requesting exclusive access to that location.

-   **A Store-Exclusive instruction**

    Used to attempt to write to the same memory location, returning a status bit to a register. If this bit is:

    -   **0** \
        It indicates that the thread or process gained exclusive access to the memory, and the write succeeds.

    -   **1** \
        It indicates that the thread or process did not gain exclusive access to the memory, and no write was performed.

The pairs of Load-Exclusive and Store-Exclusive instructions are:

-   the word instructions `LDREX` and `STREX`
-   the halfword instructions `LDREXH` and `STREXH`
-   the byte instructions `LDREXB` and `STREXB`

Software must use a Load-Exclusive instruction with the corresponding Store-Exclusive instruction.

To perform an exclusive read-modify-write of a memory location, software must:

1. Use a Load-Exclusive instruction to read the value of the location.
2. Modify the value, as required.
3. Use a Store-Exclusive instruction to attempt to write the new value back to the memory location.
4. Test the returned status bit. If this bit is:

    - **0** \
      The read-modify-write completed successfully.

    - **1** \
      No write was performed. This indicates that the value returned at step 1 might be out of date. The software must retry the entire read-modify-write sequence.

The processor removes its exclusive access tag if:

-   It executes a `CLREX` instruction.
-   It executes a Store-Exclusive instruction, regardless of whether the write succeeds.
-   An exception occurs. This means the processor can resolve semaphore conflicts between different threads.
