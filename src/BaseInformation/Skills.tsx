import React from "react";

import "./Skill.css"

import {ReactComponent as CSharpLogo} from "../assets/icons/lanauage/csharp-svgrepo-com.svg";
import {ReactComponent as CppLogo} from "../assets/icons/lanauage/cpp3-svgrepo-com.svg";
import {ReactComponent as LuaLogo} from "../assets/icons/lanauage/lua-svgrepo-com.svg";
import {ReactComponent as AsLogo} from "../assets/icons/lanauage/actionscript-svgrepo-com.svg";
import {ReactComponent as TsLogo} from "../assets/icons/lanauage/typescript-svgrepo-com.svg";
import {ReactComponent as PythonLogo} from "../assets/icons/lanauage/python-svgrepo-com.svg";
import {ReactComponent as RustLogo} from "../assets/icons/lanauage/rust-svgrepo-com.svg";
import {ReactComponent as GoLogo} from "../assets/icons/lanauage/go-svgrepo-com.svg";

import {ReactComponent as UnityLogo} from "../assets/icons/engine_framework/unity_logo_2.svg";
import {ReactComponent as UnrealLogo} from "../assets/icons/engine_framework/unreal_logo.svg";
import {ReactComponent as CocosLogo} from "../assets/icons/engine_framework/cocos-svgrepo-com.svg";
import {ReactComponent as GodotLogo} from "../assets/icons/engine_framework/godot-engine-svgrepo-com.svg";
import {ReactComponent as NodeLogo} from "../assets/icons/engine_framework/nodejs02-svgrepo-com.svg";
import {ReactComponent as ReactLogo} from "../assets/icons/engine_framework/react-svgrepo-com.svg";

import {ReactComponent as GamePlayFieldIcon} from "../assets/icons/fields/gamepad-svgrepo-com.svg";
import {ReactComponent as ToolsFieldIcon} from "../assets/icons/fields/tools-svgrepo-com.svg";
import {ReactComponent as UIFieldIcon} from "../assets/icons/fields/user-interface-svgrepo-com.svg";
import {ReactComponent as ScriptingFieldIcon} from "../assets/icons/fields/script-1601-svgrepo-com.svg";
import {ReactComponent as EngineFieldIcon} from "../assets/icons/engine_framework/all-engine.svg";

import BackgroundUri from "../assets/skillsBg.png";

import commonUrl from "../CommonUrl";
import StandardButton from "../Common/StandardButton";
import NoInteractButton from "../Common/NoInteractButton";

function Skills() {
    return (
        <section id="skills_section"
                 style={{padding: "50px 10vw", background: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>
            <div style={{backgroundColor: "#FFFFFFA0"}}>
                <div>
                    <div style={{fontFamily: "Quicksand, Arial", fontSize: "40px", padding: "10px 10px"}}>
                        SKILLS
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <div style={{padding: "10px 0px"}}>
                            <div style={{
                                fontFamily: "Quicksand, Arial",
                                fontSize: "18px",
                                padding: "10px 10px"
                            }}>Programming Language
                            </div>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.csharpUrl)
                            }}>
                                <CSharpLogo/><span>C#</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.cppUrl)
                            }}>
                                <CppLogo/><span>C++</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.luaUrl)
                            }}>
                                <LuaLogo/><span>Lua</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.pythonUrl)
                            }}>
                                <PythonLogo/><span>Python</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.asUrl)
                            }}>
                                <AsLogo/><span>ActionScript</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.tsUrl)
                            }}>
                                <TsLogo/><span>TypeScript</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.rust)
                            }}>
                                <RustLogo/><span>Rust</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.goUrl)
                            }}>
                                <GoLogo/><span>Golang</span>
                            </StandardButton>
                        </div>
                        <div style={{padding: "10px 0px"}}>
                            <div style={{fontFamily: "Quicksand, Arial", fontSize: "18px", padding: "10px 10px"}}>Engine
                                / Framework
                            </div>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.unityUrl)
                            }}>
                                <UnityLogo/><span>Unity</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.unrealUrl)
                            }}>
                                <UnrealLogo/><span>Unreal</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.cocosUrl)
                            }}>
                                <CocosLogo/><span>Cocos</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.nodeJsUrl)
                            }}>
                                <NodeLogo/><span>Node JS</span>
                            </StandardButton>
                            <StandardButton className="SkillItem" onClick={() => {
                                window.open(commonUrl.React)
                            }}>
                                <ReactLogo/><span>React</span>
                            </StandardButton>
                        </div>
                        <div style={{padding: "10px 0px"}}>
                            <div
                                style={{fontFamily: "Quicksand, Arial", fontSize: "18px", padding: "10px 10px"}}>Fields
                            </div>
                            <NoInteractButton className="SkillItemWithoutClick">
                                <GamePlayFieldIcon/><span>GamePlay</span>
                            </NoInteractButton>
                            <NoInteractButton className="SkillItemWithoutClick">
                                <EngineFieldIcon/><span>Engine</span>
                            </NoInteractButton>
                            <NoInteractButton className="SkillItemWithoutClick">
                                <ToolsFieldIcon/><span>Tools</span>
                            </NoInteractButton>
                            <NoInteractButton className="SkillItemWithoutClick">
                                <UIFieldIcon/><span>UI</span>
                            </NoInteractButton>
                            <NoInteractButton className="SkillItemWithoutClick">
                                <ScriptingFieldIcon/><span>Scripting</span>
                            </NoInteractButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
