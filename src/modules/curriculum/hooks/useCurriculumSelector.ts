"use client";
import { useState, useCallback } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/lib/firebase/auth";
import { Grade, LearningArea, Strand, SubStrand } from "../types";

type WithId<T> = T & { id: string };

export function useCurriculumSelector() {
  const [grades, setGrades] = useState<WithId<Grade>[]>([]);
  const [learningAreas, setLearningAreas] = useState<WithId<LearningArea>[]>([]);
  const [strands, setStrands] = useState<WithId<Strand>[]>([]);
  const [subStrands, setSubStrands] = useState<WithId<SubStrand>[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedStrand, setSelectedStrand] = useState<string>("");
  const [selectedSubStrand, setSelectedSubStrand] = useState<string>("");

  const fetchGrades = useCallback(async () => {
    setLoading(true);
    try {
      const snap = await getDocs(query(collection(db, "curriculum"), orderBy("order")));
      setGrades(snap.docs.map(d => ({ id: d.id, ...d.data() } as WithId<Grade>)));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLearningAreas = useCallback(async (gradeId: string) => {
    setLoading(true);
    setSelectedGrade(gradeId);
    setSelectedArea("");
    setSelectedStrand("");
    setSelectedSubStrand("");
    try {
      const snap = await getDocs(collection(db, "curriculum", gradeId, "learning_areas"));
      setLearningAreas(snap.docs.map(d => ({ id: d.id, ...d.data() } as WithId<LearningArea>)));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchStrands = useCallback(async (gradeId: string, areaId: string) => {
    setLoading(true);
    setSelectedArea(areaId);
    setSelectedStrand("");
    setSelectedSubStrand("");
    try {
      const snap = await getDocs(query(collection(db, "curriculum", gradeId, "learning_areas", areaId, "strands"), orderBy("order")));
      setStrands(snap.docs.map(d => ({ id: d.id, ...d.data() } as WithId<Strand>)));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSubStrands = useCallback(async (gradeId: string, areaId: string, strandId: string) => {
    setLoading(true);
    setSelectedStrand(strandId);
    setSelectedSubStrand("");
    try {
      const snap = await getDocs(query(collection(db, "curriculum", gradeId, "learning_areas", areaId, "strands", strandId, "sub_strands"), orderBy("order")));
      setSubStrands(snap.docs.map(d => ({ id: d.id, ...d.data() } as WithId<SubStrand>)));
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    grades, learningAreas, strands, subStrands, loading,
    selectedGrade, selectedArea, selectedStrand, selectedSubStrand,
    fetchGrades, fetchLearningAreas, fetchStrands, fetchSubStrands,
  };
}
